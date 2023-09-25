import * as React from "react";
import { useState, useEffect } from "react";
import "./styles/first.css";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";
import CarousalItem from "../components/CarousalItem";

const First = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);

  let first = data.slice(current, current + 1);

  useEffect(() => {
    fetch(
      "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab"
    )
      .then((response) => response.json())
      .then((json) =>
        setData(
          json.testimonials.filter((item) => {
            return item.id;
          })
        )
      )
      .catch((error) => console.error(error));
  }, []);

  const nextSlide = () => {
    const lastCurrentIndex = data.length - 1;
    const resetIndex = current === lastCurrentIndex;
    const index = resetIndex ? 0 : current + 1;
    setCurrent(index);
  };

  const prevSlide = () => {
    const lastCurrentIndex = data.length - 1;
    const resetIndex = current === 0;
    const index = resetIndex ? lastCurrentIndex : current - 1;
    setCurrent(index);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <div id="carousal__section">
      <div className="carousal__container">
        {first.map((item) => {
          return (
            <div>
              <CarousalItem
                name={item.name}
                text={item.text}
                program_name={item.program_name}
                profile_picture={item.profile_picture.src}
                education={item.education}
                country_flag={item.country.country_flag.src}
              />
            </div>
          );
        })}
      </div>
      <div className="arrow__container">
        <button className="arrow" onClick={nextSlide}>
          <img src={leftArrow} alt="left arrow" />
        </button>
        <button className="arrow" onClick={prevSlide}>
          <img src={rightArrow} alt="right arrow" />
        </button>
      </div>
    </div>
  );
};

export default First;
