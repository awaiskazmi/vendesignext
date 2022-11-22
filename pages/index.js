import {
    useStoryblokState,
    getStoryblokApi,
    StoryblokComponent,
} from "@storyblok/react";

import {useEffect, useRef} from "react";
import { useForm } from "react-hook-form";

// import Form from "../components/Form";
import Head from "next/head";
import Link from "next/link";
import Script from 'next/script';

// sections
import LandingHeroCarousel from "../components/sections/LandingHeroCarousel";
import HeadlineStats from "../components/sections/HeadlineStats";
import {sendContactForm} from "../lib/api";

export default function HomePage({story = null}) {
    const hubSpotForm = useRef();
    const {
        register,
        handleSubmit,
    } = useForm({
        // defaultValues: {
        //     email: 'test@test.com',
        //     firstname: 'Test First',
        //     lastname: 'Test Last',
        //     phone: '03214221073',
        //     country: 'Test Country',
        // }
    });

    const onSubmit = (data) => {
        console.log('this is the dynamic form', data);
    };

    story = useStoryblokState(story);

    console.log(story.content)

    useEffect(() => {
        window.addEventListener('message', event => {
            if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
                let form = document.querySelector('[data-form-id="' + event.data.id + '"]');
                hubSpotForm.current = form;
                form.onsubmit = handleSubmit(onSubmit);
                form.querySelectorAll('input:not([type="submit"]):not([type="hidden"])').forEach(field => {
                    return <input {...register(field.name)} />;
                });
                form.querySelector('[type="submit"]').addEventListener('click', function(event) {
                    event.preventDefault();
                    form.onsubmit();
                })
            }
        });
    }, []);

    return (
        <>
            <Head>
                <title>{story?.name} | VentureDive</title>
            </Head>
            <LandingHeroCarousel slides={story.content.landing_hero_carousel} />
            <HeadlineStats/>
            <section className="bg-white py-15">
                <div className="container px-5 md:px-0">
                    <h2>Another cool section here</h2>
                    <div className="container bg-white p-10 mt-5 rounded-3xl shadow-2xl"
                         id="form-wrapper">
                        <Script id="hubspot-form">
                            {`
                                hbspt.forms.create({
                                    region: "na1",
                                    portalId: "21142614",
                                    formId: "f37b20cf-1ee8-47d4-9d4a-f8668769abbc",
                                    target: "#form-wrapper"
                                });
                            `}
                        </Script>
                    </div>
                </div>
                <div className="mt-15">
                    {/* <h1 className="text-2xl my-4">{story ? story.name : ""}</h1> */}
                    {/* <StoryblokComponent blok={story.content} />*/}
                    {/* <Form /> */}
                </div>
            </section>
        </>
    );
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "landing-page";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
    resolve_relations: ["LandingPage.testimonials", "LandingPage.fourth_carousel","LandingPage.highlights_carousel"],
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
