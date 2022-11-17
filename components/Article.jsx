import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Article({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="article">
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
}
