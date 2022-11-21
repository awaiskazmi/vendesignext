import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

// import Form from "../components/Form";
import Head from "next/head";
import Link from "next/link";

// sections
import LandingHeroCarousel from "../components/sections/LandingHeroCarousel";
import HeadlineStats from "../components/sections/HeadlineStats";

export default function HomePage({ story = null }) {
  // story = useStoryblokState(story);

  return (
    <>
      <Head>
        <title>{story?.name} | VentureDive</title>
      </Head>
      <LandingHeroCarousel />
      <HeadlineStats />
      <section className="bg-white py-15">
        <div className="container px-5 md:px-0">
          <h2>Another cool section here</h2>
        </div>
        <div className="">
          {/* <h1 className="text-2xl my-4">{story ? story.name : ""}</h1> */}
          {/* <StoryblokComponent blok={story.content} /> */}
          {/* <Form /> */}
        </div>
      </section>
    </>
  );
}

// export async function getStaticProps() {
//   // home is the default slug for the homepage in Storyblok
//   let slug = "home";

//   // load the draft version
//   let sbParams = {
//     version: "draft", // or 'published'
//     resolve_relations: ["Slider.articles"],
//   };

//   const storyblokApi = getStoryblokApi();
//   let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

//   return {
//     props: {
//       story: data ? data.story : false,
//       key: data ? data.story.id : false,
//     },
//     revalidate: 3600, // revalidate every hour
//   };
// }
