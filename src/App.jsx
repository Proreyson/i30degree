import MainLayout from "./components/MainLayout";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
