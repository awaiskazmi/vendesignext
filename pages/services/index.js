import { useState } from "react";

export default function Services() {
  const [darkMode, setDarkMode] = useState("false");
  const [stars, setRating] = useState([
    { active: false },
    { active: false },
    { active: false },
    { active: false },
    { active: false },
  ]);
  const handleClick = (id) => {
    const ratedStars = [...stars].map((star, index) => {
      return index <= id
        ? { ...star, active: true }
        : { ...star, active: false };
    });
    setRating(ratedStars);
  };

  return (
    <section className="container">
      <div className="py-12">
        <h1>Services</h1>
        <hr className="my-6" />
        Services page will look like this <code>{darkMode}</code>
        <div id="rating">
          {stars.map((el, index) => {
            return (
              <span
                className={`cursor-pointer inline-flex items-center m-1 p-2 text-3xl ${
                  el.active ? "active text-red-500" : ""
                }`}
                onClick={() => handleClick(index)}
                key={index}
              >
                &#9733;
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
