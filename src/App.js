import * as React from "react";
import Header from "./screens/Header";
import Main from "./screens/Main";
import Aprenticeship from "./components/Aprenticeship";
import Footer from "./screens/Footer";
import Faq from "./screens/Faq";

import Commitment from "./screens/Commitment";
import ViewportProvider from "./Providers/viewportProvider";
import Imagecarousel from "./screens/Imagecarousel";
import "./App.css";
export default function App() {
  return (

    <>
      <ViewportProvider>
        <div className="grid">
          <header className="header">
            <Header />
          </header>

          <main className="main">
            <Main />
          </main>

          <section className="section_1">
            <Aprenticeship />
          </section>

          <section className="section_2">
            <Commitment />
          </section>

          <section className="section_3">
            <Imagecarousel />
          </section>

          <section className="section_4">
            <Faq />
          </section>

          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </ViewportProvider>
    </>

  );
}
