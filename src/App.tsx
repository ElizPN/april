import React from "react";
import "./App.css";
import "./Team.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OurProgram } from "./components/OurProgram";
import { Counts } from "./components/Counts";
import { Listen } from "./components/Listen";
import { Portfolio } from "./components/Portfolio";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Counts />
      <OurProgram />
      <Listen />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
