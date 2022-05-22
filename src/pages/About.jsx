import React from "react";
import { YMaps, Map } from "react-yandex-maps";

const style = {
  position: "absolute",
  left: 160,
  top: 50,
  width: "80%",
  height: "80%",
};

const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <YMaps>
          <Map
            style={style}
            defaultState={{ center: [55.021574, 82.573856], zoom: 9 }}
          />
        </YMaps>
      </header>
    </div>
  );
};

export default About;
