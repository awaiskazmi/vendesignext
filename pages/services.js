import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

import Carousel from "../components/Carousel.jsx";
import Form from "../components/Form.jsx";

export default function Services({ story }) {
  story = useStoryblokState(story);

  return (
    <div>
      <div className="container">
        <div className="flex items-center px-4 py-20">
          <div className="grow shrink-0 w-1/2 px-3">
            <h1>Dairah classroom coming to Karachi soon!</h1>
          </div>
          {/*style={{ width: `calc( (var(--container-width)/2) + (100vw - var(--container-width))/2 )` }}*/}
          <div className="shrink-0 w-half pl-12 flex items-center">
            <img
              src="http://picsum.photos/id/1/720/480"
              alt="Image"
              className="rounded w-full"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div>Welcome to Next.js, brother!</div>
        <h1 className="text-2xl my-4">{story ? story.name : ""}</h1>
        <hr className="my-7" />
        <StoryblokComponent blok={story.content} />
        <hr className="my-7" />
        <Form />
      </div>
      <Carousel />
    </div>
  );
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "services";

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
