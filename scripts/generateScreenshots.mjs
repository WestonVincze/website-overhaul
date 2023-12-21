import { launch } from 'puppeteer';
import { exec } from 'child_process';
/**
 * script to auto-generate og screenshot metadata for pages
 */

const server = exec('npm run dev');

let port = '3000';

server.stdout.on('data', async (data) => {
  console.log(data);

  if (data.includes('localhost')) {
    const portMatch = data.match(/http:\/\/localhost:(\d+)/);
    port = portMatch[1];
  }

  if (data.includes('Ready in')) {
    console.log('launching puppeteer...');
    const browser = await launch({headless: 'new'});

    console.log('opening new page...');
    const page = await browser.newPage();

    console.log('setting viewport...');
    await page.setViewport({ width: 1200, height: 630 });

    console.log('setting media features...');
    await page.emulateMediaFeatures([
      { name: 'prefers-reduced-motion', value: 'reduce' },
      { name: 'prefers-color-scheme', value: 'light'}
    ]);

    console.log('skipping animations...')
    await page.evaluate(() => {
      window.setTimeout = (fn) => fn();
      window.setInterval = (fn) => fn();
    })

    try {
      console.log(data);

      console.log(`navigating to localhost:${port}...`);
      await page.goto(`http://localhost:${port}`);

      console.log('hiding intro...');
      await page.addStyleTag({ content: 'article { display: none; }' });

      console.log('waiting for content...');
      await page.waitForSelector('text');

      console.log('taking screenshot `og-image.png`...');
      await page.screenshot({ path: 'public/images/og-image.png' });

      console.log('setting to dark theme...');
      await page.emulateMediaFeatures([
        { name: 'prefers-reduced-motion', value: 'reduce' },
        { name: 'prefers-color-scheme', value: 'dark'}
      ]);

      console.log('taking screenshot `og-image-dark.png`...')
      await page.screenshot({ path: 'public/images/og-image-dark.png' });

    } catch (error) {
      console.error('Something went wrong: ', error);
    } finally {
      console.log('closing browser...');
      await browser.close();

      console.log('killing server...')
      server.kill('SIGTERM');

      console.log('exiting script...')
      process.exit(0);
    }
  }
});