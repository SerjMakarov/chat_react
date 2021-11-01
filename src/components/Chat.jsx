import "./Chat.css";
import FormMessage from "./FormMessage";
import ListResponse from "./ListResponse";

const Chat = (props) => {
  return (
    <>
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
    </>
  );
};

export default Chat;
