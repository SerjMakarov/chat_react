import { useState, useEffect, useRef } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import { Home, Profile } from "../routes/routes";

export default function App() {
  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  //Уникальный id присваивается объекту в компоненте ListUser при обходе массива arChats(неуверен, что так делать правильно)
  const [arChats] = useState([
    { name: "Сергей", id: "" },
    { name: "Джон", id: "" },
    { name: "Бил", id: "" },
    { name: "Иван", id: "" },
  ]);
  const [messageClient, setMessageClient] = useState("");
  const [btnLock, setBtnLock] = useState(true);
  const [messageBot] = useState({
    message: "Сообщение отправлено",
    author: "bot",
  });
  const [send, setSend] = useState(false);
  const textInput = useRef(null);

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
    console.log(textInput);

    const id = setTimeout(() => {
      if (send) {
        submitBot();
      }
    }, 2000);
    return () => clearTimeout(id);
  }, [messageList]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="chats"
            element={
              <div className="App">
                <header className="App-header">
                  <Chat
                    btnLock={btnLock}
                    inputValue={inputValue}
                    messageList={messageList}
                    textInput={textInput}
                    arChats={arChats}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                  />
                </header>
              </div>
            }
          />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chats">Chats</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
