import Link from "next/link";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Slide({ blok }) {
  return (
    <>
      <Link href={blok.url.url} {...storyblokEditable(blok)}>
        <a>
          <article className="cursor-pointer">
            <h2>{blok.headline}</h2>
            {blok.button.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </article>
        </a>
      </Link>
      <style jsx>{``}</style>
    </>
  );
}
