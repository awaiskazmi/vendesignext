import {storyblokEditable, StoryblokComponent} from "@storyblok/react";

// carousel
import Carousel from "./Carousel";

export default function LandingPage({blok}) {
    console.log(blok)
    // const slides = blok.intro_carousel.map(slide => {
    //     return (
    //         <div>
    //             <StoryblokComponent blok={slide}
    //                                 key={slide._uid}/>
    //         </div>
    //     )}
    // );

    return (
        <div className="" {...storyblokEditable(blok)}>
            <div className="container">
                <h2>{blok.second_stat_one_number}</h2>
                <h2>{blok.second_stat_one_label}</h2>
            </div>
            {/*<Carousel slides={slides} />*/}
        </div>
    );
}
