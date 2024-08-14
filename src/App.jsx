import React, { useState } from "react";
import DrumPad from "./DrumPads.jsx";

const drumPads = [
  {
    key: "Q",
    clipId: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    clipId: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    clipId: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    clipId: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    clipId: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    clipId: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    clipId: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    clipId: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    clipId: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const App = () => {
  const [display, setDisplay] = useState("");

  const playSound = ({ keyTrigger, clipId }) => {
    const audio = document.getElementById(keyTrigger);
    audio.currentTime = 0;
    audio.play();
    setDisplay(clipId);
  };

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div id="drum-pads">
        {drumPads.map((pad) => (
          <DrumPad
            key={pad.clipId}
            clipId={pad.clipId}
            keyTrigger={pad.key}
            url={pad.url}
            handleSound={playSound}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
