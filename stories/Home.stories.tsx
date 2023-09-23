import React from "react";
import { HomeScene } from "../scenes/HomeScene/HomeScene";

/* THIS IS JUST FOR STORYBOOK TESTING PURPOSES */
/* Storybook appears to be broken... */

export default {
  title: "pages/home",
  component: HomeScene,
};

export const Home = (): JSX.Element => <HomeScene />;
