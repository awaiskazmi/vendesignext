import { getStoryblokApi } from "@storyblok/react";

export default function Article({ story: { content } }) {
  return (
    <section className="container">
      <div className="px-5 py-12 article">
        <h1>{content.Title}</h1>
        <div>{content.Excerpt}</div>
      </div>
    </section>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  // home is the default slug for the homepage in Storyblok
  const slug = params.slug;

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
    // resolve_relations: ["Slider.articles"],
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(
    `cdn/stories/article/${slug}`,
    sbParams
  );

  return {
    props: {
      story: data ? data.story : null,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
