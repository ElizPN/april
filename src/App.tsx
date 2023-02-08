import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Clients } from "./components/Clients";
import { About } from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <About />
    </div>
  );
}

export default App;
