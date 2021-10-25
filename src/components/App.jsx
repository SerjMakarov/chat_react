import { useState } from "react";
import logo from "../assets/logo.svg";
import "./App.css";
import Chat from "./Chat";

function App() {
  //Добавил поле стейта messageList
  const [messageList, setMessageList] = useState([]);
  const [client, setClient] = useState();

  const handleChange = (e) => {
    setClient({ message: e.target.value, author: "anonym" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageList([client]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Chat
          messageList={messageList}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </header>
    </div>
  );
}

export default App;
