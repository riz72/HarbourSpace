import * as React from "react";
import "./styles/fulltime.css";

export default function FullTimeContract() {
  return (
    <div className="commitment__section-fulltime-contract">
      <div className="commitment__section-fulltime-contract-padding">
        <p className="commitment__section-fulltime-contract-title">
          A full-time contract
        </p>
        <p className="commitment__section-fulltime-contract-year">
          1 Year Full-Time
        </p>
        <div className="commitment__section-fulltime-contract-border" />
        <p className="commitment__section-fulltime-contract-descs">
          You’ll be guaranteed a 1 year contract with SCG upon graduation.
        </p>
      </div>
    </div>
  );
}
