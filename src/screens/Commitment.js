import * as React from "react";
import ScholarshipValue from "../components/ScholarshipValue";
import StudyWork from "../components/StudyWork";
import FullTimeContract from "../components/FullTimeContract";
import GraduationLine from "../components/GraduationLine";
import "./styles/commitment.css";
import { useState, useEffect } from "react";
import { fetchData } from "../components/services/getData.service";
import { useCommitment } from "./stateManagement/commitmentContext";

export default function Commitment() {
  const {
    studyCommitment,
    setStudyCommitment,
    internshipCommitment,
    setInternshipCommitment
  } = useCommitment();
  const [studyCommitmentDesc, setStudyCommitmentDesc] = useState('');
  const [internshipCommitmentDesc, setInternshipCommitmentDesc] = useState('');
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        console.log("Fetched Data:", fetchedData);
        setStudyCommitment(fetchedData.scholarship.study_commitment)
        setStudyCommitmentDesc(fetchedData.scholarship.study_commitment_text)
        setInternshipCommitment(fetchedData.scholarship.internship_commitment)
        setInternshipCommitmentDesc(fetchedData.scholarship.internship_commitment_text)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div id="commitment__section">
      <div className="commitment">
        <div className="commitment__section-flex">
          <ScholarshipValue />
          <div className="marginRight" />
          <div>
            <div className="commitment__section-flex-2Boxes">
              <StudyWork
                title="Study Commitment"
                hours={studyCommitment}
                desc={studyCommitmentDesc}
              />

              <StudyWork
                title="Work Commitment"
                hours={internshipCommitment}
                desc={internshipCommitmentDesc}
              />
            </div>
            {/* Graduation Line */}
            <div className="line-section">
              <GraduationLine />
            </div>

            
            <div className="commitment__section-fulltime-contract">
              <FullTimeContract />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
