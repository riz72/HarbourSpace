import * as React from "react";
import { useEffect, createContext, useState, useContext } from "react";
import First from "../components/First";
import FirstThree from "../components/FirstThree";

const viewportContext = createContext({});

const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};

export function CarousalViewport() {
  const { width } = useViewport();
  const breakpoint = 670;

  return width < breakpoint ? <First /> : <FirstThree />;
}

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

export default ViewportProvider;
