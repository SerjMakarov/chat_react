import "./Chat.css";
import FormMessage from "./FormMessage";
import ListResponse from "./ListResponse";

const Chat = (props) => {
  return (
    <>
      <div className="ChatWrapper">
        <ListResponse messageList={props.messageList} />
        <FormMessage
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
        />
      </div>
    </>
  );
};

export default Chat;
