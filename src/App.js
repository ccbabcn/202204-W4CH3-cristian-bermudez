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
          <div className="actions">
            <span className="number">667359961</span>

            <a href="?call" className="call">
              Call
            </a>

            <a href="?hang" className="hang active">
              Hang
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
