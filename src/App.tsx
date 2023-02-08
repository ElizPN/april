import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Clients } from "./components/Clients";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
    </div>
  );
}

export default App;
