import styles from "../styles/globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Article from "../components/Article.jsx";
import LandingPage from "../components/LandingPage";
import Carousel from "../components/Carousel.jsx";
import Page from "../components/Page";
import Button from "../components/Button";
import RichText from "../components/RichText";
import Script from "../components/Script";
import Slide from "../components/Slide";

import Layout from "../components/Layout";

// technicalName from StoryBlok: Component Name from Next
const components = {
  button: Button,
  article: Article,
  carousel: Carousel,
  richText: RichText,
  Page: Page,
  "Landing Page": LandingPage,
  script: Script,
  Slide: Slide,
};

storyblokInit({
  accessToken: "tATRHSub0wyfLWCG1vc7fQtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
