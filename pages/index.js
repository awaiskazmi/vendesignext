import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function HomePage({ story }) {
  story = useStoryblokState(story);

  return (
    <div>
      <div>Welcome to Next.js, brother!</div>
      <h1 className="text-2xl my-4">{story ? story.name : ""}</h1>
      <hr className="my-7" />
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
