import React from "react";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Hero isLogin={false}/>
    </>
  );
};

export default App;
