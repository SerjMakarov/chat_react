import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";

function App() {
  const message = "React";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text={message} />
      </header>
    </div>
  );
}

export default App;
