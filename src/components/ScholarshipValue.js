import * as React from "react";
import "./styles/scholarshipValue.css";

export default function ScholarshipValue() {
  return (
    <div id="commitment__section">
      <div className="commitment__section-scholarshipValue">
        <div className="commitment__section-scholarshipValue-container-tall">
          <p className="commitment__section-scholarshipValue-text">
            Scholarship value
          </p>
          <p className="commitment__section-scholarshipValue-euro">€ 31,300</p>
        </div>
        <div className="commitment__section-scholarshipValue-border" />
        <div className="commitment__section-scholarshipValue-border-row">
          <div>
            <p className="commitment__section-scholarshipValue-text">
              Tution covered
            </p>
            <p> € 20,900</p>
          </div>

          <div>
            <p className="commitment__section-scholarshipValue-text">
              Remaining
            </p>
            <p> € 2000</p>
          </div>
        </div>

        <div className="commitment__section-scholarshipValue-paddingStipend">
          <p className="commitment__section-scholarshipValue-text">
            Living stipend
          </p>
          <p>€8,400 (€700/month)</p>
        </div>
      </div>
    </div>
  );
}
