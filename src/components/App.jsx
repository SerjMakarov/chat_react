import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import "./App.css";
import Chat from "./Chat";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [messageClient, setMessageClient] = useState("");
  const [btnLock, setBtnLock] = useState(true);
  const [messageBot] = useState({
    message: "Сообщение отправлено",
    author: "bot",
  });
  const [send, setSend] = useState(false);

  const handleChange = (e) => {
    const message = { message: inputValue, author: "anonym" };
    setInputValue((message.message = e.target.value));
    if (inputValue !== "") {
      setMessageClient(message);
      setBtnLock(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageList([...messageList, messageClient]);
    setBtnLock(true);
    setInputValue("");
    setSend(true);
  };

  const submitBot = () => {
    setSend(false);
    setMessageList([...messageList, messageBot]);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (send) {
        submitBot();
      }
    }, 2000);
    return () => clearTimeout(id);
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Chat
          btnLock={btnLock}
          inputValue={inputValue}
          messageList={messageList}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </header>
    </div>
  );
}

export default App;
