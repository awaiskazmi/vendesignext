import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-light">
      <div className="container px-5 md:px-=0 pt-15 pb-14">
        <div className="md:flex justify-between gap-15">
          <div className="md:w-3/6">
            <h2>Let's craft brilliance together!</h2>
            <p>
              Schedule a 15-minute call with our design expert to discuss your
              project idea
            </p>
            <div className="flex gap-5 mt-9">
              <button>Talk to us</button>
              <button>Estimate Project Cost</button>
            </div>
          </div>
          <div className="md:w-2/6 flex gap-10">
            <div className="hidden md:block flex-1">
              <h5 className="font-bold font-sans mb-5">Explore</h5>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href={`#`}>Our Work</Link>
                </li>
                <li>
                  <Link href={`#`}>Services</Link>
                </li>
                <li>
                  <Link href={`#`}>Meet the team</Link>
                </li>
                <li>
                  <Link href={`#`}>Community</Link>
                </li>
                <li>
                  <Link href={`#`}>Blog</Link>
                </li>
                <li>
                  <Link href={`#`}>Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 mt-10 md:mt-0">
              <h5 className="font-bold font-sans mb-5">Connect</h5>
              <p>+92 331 3987 398</p>
              <p>
                <a href="mailto:design@venturedive.com">
                  design@venturedive.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-7 md:py-14 text-center">
        &copy; 2022 VentureDive. ALl Rights Reserved.
      </div>
    </footer>
  );
}
