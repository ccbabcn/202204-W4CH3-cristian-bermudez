import { useContext } from "react";
import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";
import ActionContext from "./context/ActionContext";

function App() {
  const textTest = useContext(ActionContext);
  return (
    <div className="App">
      <div className="container">
        <Info infoTex={textTest} />
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard />
          </div>
          <Actions />
        </main>
      </div>
    </div>
  );
}
export default App;
