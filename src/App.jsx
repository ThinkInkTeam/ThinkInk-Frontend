import React from "react";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import CodeSample from "./components/codeSample/CodeSample.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero isLogin={false} />
        <CodeSample />
      </main>
    </>
  );
};

export default App;
