import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <Confetti
      width={width}
      height={height * 1.7}
      numberOfPieces={150}
      gravity={0.1}
    />
  );
};
export default ConfettiComponent;
