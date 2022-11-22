import Link from "next/link";

import styles from "../../styles/sections/LandingHeroCarousel.module.css";

export default function LandingHeroCarousel({slides}) {
  console.log(slides)

  return (
    <section>
      <div className="container">
        {slides.map(slide => (
            <article className="md:flex items-center py-20">
              <div className="grow shrink-0 md:w-1/2 px-5 md:px-0 mb-12 md:mb-0">
                <h1 className="font-medium">
                  {slide.title}
                </h1>
                {/* <Link href={`#`}>
              <a>Learn More</a>
            </Link> */}
              </div>
              {/*style={{ width: `calc( (var(--container-width)/2) + (100vw - var(--container-width))/2 )` }}*/}
              <div className="shrink-0 md:w-half md:pl-15 flex items-center">
                <div className={styles.carouselImagesWrapper}>
                  <div
                      className={`overflow-hidden bg-[#1363DF] rounded-l-none md:rounded-l-lg rounded-lg ${styles.a}`}
                  >
                    <img src={slide.img_top_s.filename}
                         className="h-full w-full object-cover object-center"/>
                  </div>
                  <div className={`overflow-hidden bg-[#1363DF] rounded-lg ${styles.b}`}>
                    <img src={slide.img_top_m.filename}
                         className="h-full w-full object-cover object-center"/>
                  </div>
                  <div
                      className={`overflow-hidden bg-[#1363DF] rounded-r-none md:rounded-r-lg rounded-lg ${styles.c}`}
                  >
                    <img src={slide.img_top_l.filename}
                         className="h-full w-full object-cover object-center"/>
                  </div>
                  <div className={`overflow-hidden bg-[#1363DF] rounded-lg ${styles.d}`}>
                    <img src={slide.img_bottom_l.filename}
                         className="h-full w-full object-cover object-center"/>
                  </div>
                  <div className={`overflow-hidden bg-[#1363DF] rounded-lg ${styles.e}`}>
                    <img src={slide.img_bottom_m.filename}
                         className="h-full w-full object-cover object-center"/>
                  </div>
                  <div
                      className={`overflow-hidden bg-[#1363DF] rounded-r-none md:rounded-r-lg rounded-lg ${styles.f}`}
                  >
                    <img src={slide.img_bottom_s.filename}
                         className="h-full w-full object-cover object-center"/>
                  </div>
                </div>
              </div>
            </article>
        ))}
      </div>
    </section>
  );
}
