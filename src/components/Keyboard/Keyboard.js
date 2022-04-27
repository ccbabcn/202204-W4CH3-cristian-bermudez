import keyList from "../../data/keylist";
import Key from "../Key/Key";

const Keyboard = () => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keyList.map((key, index) => (
          <Key
            key={index}
            text={key}
            action={() => {}}
            nameClass={typeof key === "number" ? "key" : "key big"}
          />
        ))}
      </ol>
    </div>
  );
};

export default Keyboard;
