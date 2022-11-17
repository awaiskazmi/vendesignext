import {storyblokEditable, StoryblokComponent} from "@storyblok/react";

// carousel
import Carousel from "./Carousel";

export default function LandingPage({blok}) {
    const slides = blok.intro_carousel.map(slide => {
        return (
            <div>
                <StoryblokComponent blok={slide}
                                    key={slide._uid}/>
            </div>
        )}
    );

    return (
        <div className="" {...storyblokEditable(blok)}>
            <Carousel slides={slides} />
        </div>
    );
}
