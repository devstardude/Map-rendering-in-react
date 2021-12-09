import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import MapBox from "./components/MapBox";

const App = () => {
  const [location, setLocation] = useState({
    lat: "42.5490211",
    lon: "-70.80368",
  });
  const setCoordinates = (coordinates) => {
    setLocation(coordinates);
  };
  return (
    <div className="App">
      <Header />
      <InputBox submitCoordinates={setCoordinates} />
      <MapBox coordinates={location} />
      <Footer />
    </div>
  );
};

export default App;
