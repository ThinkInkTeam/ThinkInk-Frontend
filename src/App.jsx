import React from "react";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import CodeSample from "./components/codeSample/CodeSample.jsx";
import Footer from "./components/footer/Footer.jsx";
import Fqa from "./components/FQA/Fqa.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero isLogin={false} />
        <CodeSample />
        <Fqa />
      </main>
      <Footer />
    </>
  );
};

export default App;
