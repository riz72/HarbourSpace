import * as React from "react";
import zeptolab from "../assets/zeptolab.png";
import "./styles/interactionDesign.css";
import stamp from "../assets/stamp.svg";

const InteractionBox = () => {
  return (
    <div>
      <div className="interaction__box">
        <img className="interaction__box-img" src={stamp} alt="stamp" />
      </div>
      <div className="interaction__box-title">
        <h3>Interaction Design Apprenticeship</h3>
      </div>
    </div>
  );
};

export default function InteractionDesign() {
  return (
    <div id="interaction__section">
      <div>
        <div className="interaction__main">
          <div className="interaction__box-positioning">
            <InteractionBox />
          </div>
        </div>
        <div>
          <div className="interaction__box-positioning-rows">
            <div className="interaction__box-positioning-rows-right-relative-left">
              <div className="interaction__box-positioning-rows-left">
                <div>
                  <h3 className="interaction__box-positioning-rows-left-h3">
                    A fully funded work-study program to launch your tech career
                  </h3>
                  <p className="interaction__box-positioning-rows-left-p">
                    Harbour.Space has partnered with SCG to empower driven
                    talent and eliminate the barriers to accessing exceptional
                    education and career opportunities through a Masters
                    Fellowship.
                  </p>

                  <p className="interaction__box-positioning-rows-left-p">
                    Scholarship candidates will receive full financial support
                    to complete their Masters program at Harbour.Space while
                    gaining invaluable work experience through an internship
                    with SCG, a leading company in the industry.
                  </p>
                </div>
              </div>

              <div className="interaction__box-positioning-rows-left-event-wrapper">
                <p className="interaction__box-positioning-rows-left-event-wrapper-p">
                  <strong>Position: </strong> Marketing Performance
                </p>

                <button className="interaction__box-positioning-rows-left-event-wrapper-button">
                  <p className="interaction__box-positioning-rows-left-event-wrapper-button-text">
                    Apply Now
                  </p>
                </button>
              </div>
            </div>

            <div className="interaction__box-positioning-rows-right-relative-right">
              <div className="interaction__box-positioning-rows-right">
                <div className="zeptolab__container">
                  <div className="zeptolab__container-box">
                    <div>
                      <img
                        className="zeptolab__container-logo"
                        src={zeptolab}
                        alt="zeptolab logo"
                      />
                    </div>

                    <div className="zeptolab__container-responsivePositioning">
                      <div>
                        <p className="zeptolab__container-powered">
                          Powered by:
                        </p>
                      </div>

                      <div>
                        <p className="zeptolab__container-powered-strong">
                          <strong>Zeptolab</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="zeptolab__container-shortBox">
                      <h3 className="zeptolab__container-shortBox-h3">
                        Application closes in
                      </h3>
                      <p className="zeptolab__container-shortBox-p">
                        6 Day : 22 Hrs : 56 Min : 13 Seg
                      </p>
                    </div>

                    <div className="zeptolab__container-tallBox">
                      <div>
                        <h3 className="zeptolab__container-tallBox-h3">
                          Location
                        </h3>
                        <p className="zeptolab__container-tallBox-p">Bangkok</p>

                        <h3 className="zeptolab__container-tallBox-h3">
                          Start date
                        </h3>
                        <p className="zeptolab__container-tallBox-p">
                          30 June 2020
                        </p>
                      </div>

                      <div>
                        <h3 className="zeptolab__container-tallBox-h3">
                          Duration
                        </h3>
                        <p className="zeptolab__container-tallBox-p">1 Year</p>
                        <p className="zeptolab__container-tallBox-p">
                          Full-Time
                        </p>

                        <h3 className="zeptolab__container-tallBox-h3">
                          End date
                        </h3>
                        <p className="zeptolab__container-tallBox-p">
                          3 Aug 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
