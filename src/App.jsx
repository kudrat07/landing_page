import React from "react";
import "./App.css"
import Header from "./components/Header/Header";
import About from "./components/About/About"
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import HowItWorks from "./components/HowItWorks/HowItWorks"
import ContactUs from "./components/ContactUs/ContactUs"
import Footer from "./components/Footer/Footer"
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <ContactUs />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
