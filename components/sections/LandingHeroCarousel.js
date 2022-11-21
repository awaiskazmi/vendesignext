import Link from "next/link";

import styles from "../../styles/sections/LandingHeroCarousel.module.css";

export default function LandingHeroCarousel() {
  return (
    <section>
      <div className="container">
        <div className="md:flex items-center py-20">
          <div className="grow shrink-0 md:w-1/2 px-5 md:px-0 mb-12 md:mb-0">
            <h1 className="font-medium">
              Supercharge your product design with Ethr!
            </h1>
            {/* <Link href={`#`}>
              <a>Learn More</a>
            </Link> */}
          </div>
          {/*style={{ width: `calc( (var(--container-width)/2) + (100vw - var(--container-width))/2 )` }}*/}
          <div className="shrink-0 md:w-half md:pl-15 flex items-center">
            <div className={styles.carouselImagesWrapper}>
              <div
                className={`bg-[#1363DF] rounded-l-none md:rounded-l-lg rounded-lg ${styles.a}`}
              ></div>
              <div className={`bg-[#1363DF] rounded-lg ${styles.b}`}></div>
              <div
                className={`bg-[#1363DF] rounded-r-none md:rounded-r-lg rounded-lg ${styles.c}`}
              ></div>
              <div className={`bg-[#1363DF] rounded-lg ${styles.d}`}></div>
              <div className={`bg-[#1363DF] rounded-lg ${styles.e}`}></div>
              <div
                className={`bg-[#1363DF] rounded-r-none md:rounded-r-lg rounded-lg ${styles.f}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
