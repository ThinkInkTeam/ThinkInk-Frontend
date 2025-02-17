import React from "react";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import CodeSample from "./components/codeSample/CodeSample.jsx";
import Footer from "./components/footer/Footer.jsx";
import Fqa from "./components/FQA/Fqa.jsx";
import Enterprise from "./components/Enterprise/Enterprise.jsx";
import Patients from "./components/PATIENTS/Patients.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero isLogin={false} />
        <CodeSample />
        <Enterprise />
        <Patients />
        <Fqa />
      </main>
      <Footer />
    </>
  );
};

export default App;
