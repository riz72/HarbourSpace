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
// useful
{/* <div className="carousalitem__container">
<div className="carousalitem__container-upper">
  <div className="carousalitem__container-upper-image-position">
    <img
      className="carousalitem__container-profile-image"
      src=""
      alt="profile_picture"
    />
  </div>

  <div className="carousalitem__container-profile_info">
    <h4>Irene Pereyra</h4>
    <p>Interaction Design Fellow ‘19</p>
  </div>
</div>

<div className="carousalitem__container-lower">
  <div>
    <h4>This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. </h4>
  </div>
  <div>
    <p>Education : BA Visual Design</p>
  </div>
</div>
</div> */}

export default CarousalItem;
// import "./styles/carousalItem.css";
// function Carausal() {
  
//   return (
// <div className="carousalitem__container">
// <div className="carousalitem__container-upper">
//   <div className="carousalitem__container-upper-image-position">
//     <img
//       className="carousalitem__container-profile-image"
//       src=""
//       alt="profile_picture"
//     />
//   </div>

//   <div className="carousalitem__container-profile_info">
//     <h4>Irene Pereyra</h4>
//     <p>Interaction Design Fellow ‘19</p>
//   </div>
// </div>

// <div className="carousalitem__container-lower">
//   <div>
//     <h4>This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. </h4>
//   </div>
//   <div>
//     <p>Education : BA Visual Design</p>
//   </div>
// </div>
// </div>
//   );
// }

// export default Carausal;
