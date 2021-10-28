import { useState } from "react";
import logo from "../assets/logo.svg";
import "./App.css";
import Chat from "./Chat";

function App() {
  //Добавил поле стейта messageList
  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState({
    message: "",
    author: "anonym",
  });
  const [inputEmpty, setInputEmpty] = useState();
  const [btnLock, setBtnLock] = useState(true);

  console.log(inputValue);

  const handleChange = (e) => {
    setInputEmpty();
    setInputValue({ message: e.target.value, author: "anonym" });
    if (inputValue.message !== "") {
      setBtnLock(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageList([inputValue, ...messageList]);
    setInputEmpty("");
    setBtnLock(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Chat
          btnLock={btnLock}
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
