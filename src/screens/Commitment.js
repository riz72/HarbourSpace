import * as React from "react";
import ScholarshipValue from "../components/ScholarshipValue";
import StudyWork from "../components/StudyWork";
import FullTimeContract from "../components/FullTimeContract";

import "./styles/commitment.css";

export default function Commitment() {
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
                hours="3 hours / day"
                desc="You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time."
              />

              <StudyWork
                title="Work Commitment"
                hours="4 hours / day"
                desc="Immerse yourself in the professional world during your apprenticeship. You’ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.  "
              />
            </div>

            <div className="marginBottom" />
            <div className="commitment__section-fulltime-contract">
      
              <FullTimeContract />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
