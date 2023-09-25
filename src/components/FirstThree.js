import React, { useState, useEffect } from "react";
import "./styles/first.css";
import CarousalItem from "./CarousalItem";

const FirstThree = () => {
  const [data, setData] = useState([]);
  const [current] = useState(0);

  let firstThree = data.slice(current, current + 4);

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

  return (
    <div>
      {firstThree.map((item) => {
        return (
          <div className="carousalcontainer">
            <p>hello world</p>
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
  );
};

export default FirstThree;
