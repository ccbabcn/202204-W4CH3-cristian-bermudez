import Actions from "./components/Actions/Actions";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
        <span className="message">Calling...</span>
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
