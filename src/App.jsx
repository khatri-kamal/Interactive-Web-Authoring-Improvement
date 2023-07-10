import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImageMap, Contact, Hero, Navbar, Interest } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/imageMap" element={<MainPage />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const MainPage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat-bg-center">
        <Hero />
      </div>
      <ImageMap />
    </>
  );
};

export default App;
