/* eslint-disable no-console */
import { launch } from "puppeteer";
import { exec } from "child_process";
import fs from "fs";
import readline from "readline";
/**
 * script to auto-generate og screenshot metadata for pages
 */
const path = "public/images/og-image";
const ext = ".png";

const server = exec("npm run dev");

let port = "3000";

server.stdout.on("data", async (data) => {
  console.log(data);

  if (data.includes("localhost")) {
    const portMatch = data.match(/http:\/\/localhost:(\d+)/);
    port = portMatch[1];
  }

  if (data.includes("Ready in")) {
    console.log("launching puppeteer...");
    const browser = await launch({ headless: "new" });

    console.log("opening new page...");
    const page = await browser.newPage();

    console.log("setting viewport...");
    await page.setViewport({ width: 1200, height: 630 });

    console.log("setting media features...");
    await page.emulateMediaFeatures([
      { name: "prefers-reduced-motion", value: "reduce" },
      { name: "prefers-color-scheme", value: "light" },
    ]);

    console.log("skipping animations...");
    await page.evaluate(() => {
      window.setTimeout = (fn) => fn();
      window.setInterval = (fn) => fn();
    });

    try {
      console.log(`navigating to localhost:${port}...`);
      await page.goto(`http://localhost:${port}`);

      console.log("hiding intro...");
      await page.addStyleTag({ content: "article { display: none; }" });

      console.log("waiting for content...");
      await page.waitForSelector("text");

      console.log(`taking screenshot ${path}${ext}...`);
      if (fs.existsSync(`${path}${ext}`)) {
        fs.renameSync(`${path}${ext}`, `${path}-backup${ext}`);
      }
      await page.screenshot({ path: `${path}${ext}` });

      console.log("setting to dark theme...");
      await page.emulateMediaFeatures([
        { name: "prefers-reduced-motion", value: "reduce" },
        { name: "prefers-color-scheme", value: "dark" },
      ]);

      console.log(`taking alt screenshot ${path}-dark${ext}...`);
      if (fs.existsSync(`${path}-dark${ext}`)) {
        fs.renameSync(`${path}-dark${ext}`, `${path}-dark-backup${ext}`);
      }
      await page.screenshot({ path: `${path}-dark${ext}` });

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      await new Promise((resolve) => {
        rl.question("Keep new images? (y/n)", async (answer) => {
          if (answer.toLowerCase() === "y") {
            fs.unlinkSync(`${path}-backup${ext}`);
            fs.unlinkSync(`${path}-dark-backup${ext}`);
          } else {
            fs.unlinkSync(`${path}${ext}`);
            fs.unlinkSync(`${path}-dark${ext}`);
            fs.renameSync(`${path}-backup${ext}`, `${path}${ext}`);
            fs.renameSync(`${path}-dark-backup${ext}`, `${path}-dark${ext}`);
          }
          resolve();
          rl.close();
        });
      });
    } catch (error) {
      console.error("Something went wrong: ", error);
    } finally {
      console.log("closing browser...");
      await browser.close();

      console.log("killing server...");
      server.kill("SIGTERM");

      console.log("exiting script...");
      process.exit(0);
    }
  }
});
