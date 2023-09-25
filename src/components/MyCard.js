import React from "react";
import "./styles/myCard.css";
const Mycard = () => {
  return (
    <div className="carousalitem__container">
      <div className="carousalitem__container-upper">
        <div className="carousalitem__container-upper-image-position">
          <div
            className="carousalitem__container-profile-image"
          >
          </div>
        </div>

        <div className="carousalitem__container-profile_info">
          <h4>Irene Pereyra</h4>
          <p>Interaction Design Fellow ‘19</p>
        </div>
      </div>

      <div className="carousalitem__container-lower">
        <div>
          <h4>
            This Fellowship was a turning point in my career. I wouldn’t be
            where I am today without the financial support and experienced
            offered through the program.{" "}
          </h4>
        </div>
        <div>
          <p>Education : BA Visual Design</p>
        </div>
      </div>
    </div>
  );
};

export default Mycard;
