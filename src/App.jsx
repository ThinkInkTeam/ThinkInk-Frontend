import TopNav from "./common/TopNav.jsx";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import CodeSample from "./components/codeSample/CodeSample.jsx";
import Footer from "./components/footer/Footer.jsx";
import Fqa from "./components/FQA/Fqa.jsx";
import Enterprise from "./components/Enterprise/Enterprise.jsx";
import Patients from "./components/PATIENTS/Patients.jsx";
import Articles from "./components/articles/Articles.jsx";
import FileUpload from "./components/fileupload/FileUpload.jsx";

const App = () => {
  const isLogin = !!localStorage.getItem("authToken");

  return (
    <>
      <TopNav />
      <Header />
      <main className="overflow-x-hidden">
        <Hero isLogin={isLogin} />
        <FileUpload />
        <CodeSample />
        <Enterprise />
        <Patients />
        <Articles />
        <Fqa />
      </main>
      <Footer />
    </>
  );
};

export default App;
