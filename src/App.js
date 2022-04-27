import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Info infoTex={"Calling..."} />
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
