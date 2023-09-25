import * as React from "react";
import ViewportProvider from "../Providers/viewportProvider";
import { CarousalViewport } from "../Providers/viewportProvider";

export default function Carousal() {
  return (
    <>
      <ViewportProvider>
        <CarousalViewport />
      </ViewportProvider>
    </>
  );
}
