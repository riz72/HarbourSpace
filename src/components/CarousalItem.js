import React from "react";
import "./styles/carousalItem.css";

const CarousalItem = ({
  name,
  text,
  program_name,
  education,
  country_flag,
  profile_picture,
}) => {
  return (
    <div>
      <div className="carousalitem__container">
        <div className="carousalitem__container-upper">
          <div className="carousalitem__container-upper-image-position">
            <img
              className="carousalitem__container-profile-image"
              src={profile_picture}
              alt="profile_picture"
            />
            <img
              className="carousalitem__container-country-image"
              src={country_flag}
              alt="country_flag"
            />
          </div>

          <div className="carousalitem__container-profile_info">
            <h4>{name}</h4>
            <p>{program_name}</p>
          </div>
        </div>

        <div className="carousalitem__container-lower">
          <div>
            <h4>{text}</h4>
          </div>
          <div>
            <p>Education : {education}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarousalItem;
