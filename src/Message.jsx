import "./Message.css";

const Message = (props) => {
  return (
    <div className="Wrapper">
      <h1 className="Wrapper__title">{props.text}</h1>
    </div>
  );
};

export default Message;
