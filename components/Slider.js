import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { useState, useEffect } from "react";
import Link from "next/link";

import Carousel from "./Carousel";

export default function Slider({ blok }) {
  // <div {...storyblokEditable(blok)} />;
  const articles = blok.articles.map((article) => {
    return (
      <article
        className="flex-1 p-5 border rounded cursor-pointer bgc-red-500 relative hover:scale-95 bg-white transition ease duration-100"
        key={article.id}
      >
        <h3>{article.name}</h3>
        <Link href={article.full_slug}>
          <a>
            Read more
            <span className="absolute top-0 right-0 bottom-0 left-0"></span>
          </a>
        </Link>
      </article>
    );
  });

  return <Carousel slides={articles} />;
}
