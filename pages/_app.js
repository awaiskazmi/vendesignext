import styles from "../styles/globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Article from "../components/Article";
import Page from "../components/Page";
import Button from "../components/Button";
import RichText from "../components/RichText";

import Layout from "../components/Layout";

// technicalName from StoryBlok: Component Name from Next
const components = {
  button: Button,
  article: Article,
  richText: RichText,
  page: Page,
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
