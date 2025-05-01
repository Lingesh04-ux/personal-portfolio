// src/context/ScrollContext.jsx
import { createContext, useRef } from "react";

export const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {

  const footerRef = useRef(null);
  const educationRef = useRef(null);
  const serviceRef = useRef(null);
  const experienceRef = useRef(null);
  const homeRef = useRef(null);
  const solutionRef = useRef(null);

  const scrollToHome = () => {
    if(homeRef.current){
      homeRef.current.scrollIntoView({ behavior:'smooth' });
    }
  };

  const scrollToFooter = () => {
    
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    //   if (footerRef.current) {}
  };

  const scrollToEducation = () => {
    educationRef.current.scrollIntoView({behavior:'smooth'});
  };

  const scrollToService = () => {
    serviceRef.current.scrollIntoView({behavior:'smooth'});
  };

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({behavior:'smooth'});
    // console.log(experienceRef.current.scrollIntoView({behavior:'smooth'}))
  };

  const scrollToSolution = () => {
    solutionRef.current.scrollIntoView({behavior: 'smooth'});
    // console.log(headerRef.current?.scrollIntoView({behavior: 'smooth'}))
  };


  return (
    <ScrollContext.Provider value={{ footerRef, educationRef, serviceRef, experienceRef, homeRef, solutionRef,
        scrollToFooter, scrollToEducation, scrollToService, scrollToExperience, scrollToHome, scrollToSolution }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
