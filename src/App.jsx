import "./App.css";
import CompaniesLogo from "./components/Companies";
import DownloadSection from "./components/DownloadSection";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <div className="max-width">
        <Navbar />
        <Hero />
        <CompaniesLogo />
        <Mission />
      </div>
      <Location />
      <div className="max-width">
        <DownloadSection />
        <Faq />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
