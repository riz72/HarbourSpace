import * as React from "react";
import zeptolab from "../assets/zeptolab.png";
import "./styles/interactionDesign.css";
import stamp from "../assets/stamp.svg";
import { useState, useEffect } from "react";
import { fetchData } from "../components/services/getData.service";
const InteractionBox = () => {
  return (
    <div>
      <div className="interaction__box">
        <img className="interaction__box-img" src={stamp} alt="stamp" />
      </div>
      <div className="interaction__box-title">
        <div>Interaction Design Apprenticeship</div>
      </div>
    </div>
  );
};

export default function InteractionDesign() {
  const [scholarshipLocation, setScholarshipLocation] = useState({});
  const [scholarshipStartDate, setScholarshipStartDate] = useState("");
  const [scholarshipEndDate, setScholarshipEndtDate] = useState("");
  const [scholarshipDuration, setScholarshipDuration] = useState("");
  const [description, setDescription] = useState("");
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setDescription(fetchedData.scholarship.description[0].data);
        setScholarshipDuration(fetchedData.scholarship.duration);
        setScholarshipLocation(fetchedData.scholarship.location);
        const formattedStartDate = formatDate(
          fetchedData.scholarship.scholarship_start_date
        );
        setScholarshipStartDate(formattedStartDate);
        const formattedEndDate = formatDate(
          fetchedData.scholarship.application_end_date
        );
        setScholarshipEndtDate(formattedEndDate);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
    console.log("data", scholarshipLocation);
  }, []);
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
                    {description}
                  </p>

                  <div className="interaction__box-positioning-rows-left-event-wrapper">
                    <p className="interaction__box-positioning-rows-left-event-wrapper-p">
                      <strong>Position: </strong> Marketing Performance
                    </p>

                    <button className="interaction__box-positioning-rows-left-event-wrapper-button">
                      <span className="interaction__box-positioning-rows-left-event-wrapper-button-text">
                        Apply Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="interaction__box-positioning-rows-left-event-wrapper">
                <p className="interaction__box-positioning-rows-left-event-wrapper-p">
                  <strong>Position: </strong> Marketing Performance
                </p>

                <button className="interaction__box-positioning-rows-left-event-wrapper-button">
                  <p className="interaction__box-positioning-rows-left-event-wrapper-button-text">
                    Apply Now
                  </p>
                </button>
              </div> */}
            </div>

            <div className="interaction__box-positioning-rows-right-relative-right zeptolab__container-tallBox-bg">
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
                          Zeptolab
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
                        6 Day : 22 Hrs : 56 Min : 13 Sec
                      </p>
                    </div>

                    <div className="zeptolab__container-tallBox">
                      <div>
                        <h3 className="zeptolab__container-tallBox-h3">
                          Location
                        </h3>
                        <p className="zeptolab__container-tallBox-p">
                          {scholarshipLocation.name}
                        </p>
                        <div className="startDate">
                          <h3 className="zeptolab__container-tallBox-h3">
                            Start date
                          </h3>
                          <p className="zeptolab__container-tallBox-p">
                            {/* 30 June 2020 */} {scholarshipStartDate}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="zeptolab__container-tallBox-h3">
                          Duration
                        </h3>
                        <p className="zeptolab__container-tallBox-p">
                          {scholarshipDuration} Year
                        </p>
                        <p className="zeptolab__container-tallBox-p">
                          Full-Time
                        </p>

                        <h3 className="zeptolab__container-tallBox-h3">
                          End date
                        </h3>
                        <p className="zeptolab__container-tallBox-p">
                          {/* 3 Aug 2020 */} {scholarshipEndDate}
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
