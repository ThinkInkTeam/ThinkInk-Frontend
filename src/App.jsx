import React from "react";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import CodeSample from "./components/codeSample/CodeSample.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Hero isLogin={false}/>
      <CodeSample />
    </>
  );
};

export default App;
