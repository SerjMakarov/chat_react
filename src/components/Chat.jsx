import "./Chat.css";
import FormMessage from "./FormMessage";
import ListResponse from "./ListResponse";
import { ListUser } from "./ListUser";

const Chat = (props) => {
  return (
    <>
      <div className="ChatBox">
        <ListUser arChats={props.arChats} />
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
