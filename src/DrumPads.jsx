import React, { useEffect } from "react";

function DrumPad({ clipId, keyTrigger, url, handleSound }) {
  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === keyTrigger) {
      const button = document.getElementById(clipId);
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 100);

      handleSound({ keyTrigger, clipId });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      id={clipId}
      className="drum-pad"
      onClick={() => handleSound({ keyTrigger, clipId })}
    >
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={url}></audio>
    </div>
  );
}

export default DrumPad;
