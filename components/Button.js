import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

export default function Button({ blok }) {
  const noindex = blok.noindex ? "noindex" : "";
  const nofollow = blok.nofollow ? "nofollow" : "";
  const rel = `${noindex} ${nofollow}`;
  const hasIcon = blok.has_icon;

  return (
    <>
      <Link href={blok.url.url} {...storyblokEditable(blok)}>
        <a
          rel={rel}
          className="btn inline-flex px-5 py-2 rounded hover:rounded-3xl items-center"
        >
          {hasIcon && (
            <span className="material-icons mr-2 text-base">
              {blok.icon_label}
            </span>
          )}
          {blok.label}
        </a>
      </Link>
      <style jsx>
        {`
          .btn {
            background-color: ${blok.bg_color};
            color: ${blok.text_color};
            transition: all 0.2s ease;
          }
          .btn:hover {
            background-color: ${blok.bg_color_hover};
            color: ${blok.text_color_hover};
          }
        `}
      </style>
    </>
  );
}
