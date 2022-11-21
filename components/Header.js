import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const [headerLinks, setHeaderLinks] = useState([]);

  useEffect(() => {
    const getHeaderLinks = async () => {
      const storyblokApi = getStoryblokApi();
      const {
        data: { stories },
      } = await storyblokApi.get(
        `cdn/stories?starts_with=header/&is_startpage=false`
      );

      setHeaderLinks(stories);
    };

    getHeaderLinks();
  }, []);

  return (
    <header className="px-5 md:px-0 py-6 bg-white text-white shadow">
      <div className="flex gap-3 container items-center justify-between">
        <Link href={`/`}>
          <a className="text-white hover:text-red-400">
            <img src="/logo.svg" alt="VentureDive Logo" height={40} />
          </a>
        </Link>
        <div className="links flex gap-5">
          {headerLinks.map(({ content: link }) => {
            return (
              <Link key={link.Label} href={`/${link.URL.cached_url}`}>
                <a
                  className={
                    router.pathname == `/${link.URL.cached_url}`
                      ? "font-bold text-red-500"
                      : "text-black"
                  }
                >
                  {link.Label}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
