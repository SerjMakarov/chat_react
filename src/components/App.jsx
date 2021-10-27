import { useState } from "react";
import logo from "../assets/logo.svg";
import "./App.css";
import Chat from "./Chat";

function App() {
  //Добавил поле стейта messageList
  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputEmpty, setInputEmpty] = useState();

  const handleChange = (e) => {
    setInputEmpty();
    setInputValue({ message: e.target.value, author: "anonym" })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageList([inputValue, ...messageList]);
    setInputEmpty('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Chat
          inputEmpty={inputEmpty}
          messageList={messageList}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </header>
    </div>
  );
}

export default App;
