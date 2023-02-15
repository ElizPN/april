import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OurProgram } from "./components/OurProgram";
import { Counts } from "./components/Counts";
import { Video } from "./components/Video";
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
      <Video />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
