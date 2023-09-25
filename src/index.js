import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CommitmentProvider } from "./screens/stateManagement/commitmentContext";
ReactDOM.render(
  <React.StrictMode>
    <CommitmentProvider>
      <App />
    </CommitmentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
