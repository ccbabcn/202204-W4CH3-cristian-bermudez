import keyList from "../../data/keylist";
import Key from "../Key/Key";

const Keyboard = () => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keyList.map((key) => (
          <Key
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
