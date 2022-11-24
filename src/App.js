import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import "./css/index.css";

function App() {
  return (
    <>
      <Header />
      <main style={{ background: "#000000" }}>
        <AboutUs />
        <List />
      </main>
    </>
  );
}

export default App;
