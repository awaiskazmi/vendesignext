import { storyblokEditable } from "@storyblok/react";

export default function Script({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      dangerouslySetInnerHTML={{ __html: blok.body }}
    />
  );
}
