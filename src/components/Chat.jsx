import { useSelector, useDispatch } from "react-redux";
import "./Chat.css";
import FormMessage from "./FormMessage";
import ListResponse from "./ListResponse";
import { ListUser } from "./ListUser";
import { removeMessageByChatID } from "../store/messages/actions";
import { createChat, removeChat, setChats } from "../store/chats/actions";
// import {getChatList} from '../store/chats/selectors';
import { useCallback, useEffect } from "react";
// import { nanoid } from "nanoid";

const Chat = (props) => {
  const chats = useSelector((state) => state.chats.chats);
  const dispatch = useDispatch();
  console.log(chats);
  const onCreate = useCallback(() => {
    dispatch(
      createChat({
        name: "chatName",
        id: "",
      })
    );
  }, []);

  const onDelete = (chatId) => {
    dispatch(removeChat(0));
    dispatch(removeMessageByChatID(chatId));
  };

  // useEffect(() => {
  //   dispatch(setChats(CHATS))
  // },[])

  return (
    <>
      <div className="ChatBox">
        <ListUser onDelete={onDelete} onCreate={onCreate} arChats={chats} />
        <div className="ChatWrapper">
          <ListResponse messageList={props.messageList} />
          <FormMessage
            btnLock={props.btnLock}
            inputValue={props.inputValue}
            textInput={props.textInput}
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default Chat;
