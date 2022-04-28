import { useState } from "react";
import keyList from "../../data/keylist";
import Key from "../Key/Key";

const Keyboard = () => {
  const [markedNumber, setmarkedNumber] = useState([]);
  const keyEventHandler = (clickOnKey) => {
    if (markedNumber.length < 10) {
      const keyClicked = clickOnKey.target.textContent;
      setmarkedNumber([...markedNumber, keyClicked]);
    }
  };

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keyList.map((key, index) => (
          <Key
            key={index}
            text={key}
            action={keyEventHandler}
            nameClass={typeof key === "number" ? "key" : "key big"}
          />
        ))}
      </ol>
    </div>
  );
};

export default Keyboard;
