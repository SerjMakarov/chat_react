import "./FormMessage.css";

const FormMessage = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit} className="MainForm">
        <label className="MainForm__Item">
          <div className="MainForm__Title">Сообщение:</div>
          <input
            onPaste={props.handleChange}
            onChange={props.handleChange}
            className="MainForm__Message"
            type="text"
            name="message"
            value={props.inputValue}
          />
        </label>
        <input
          onClick={props.handleSubmit}
          className="MainForm__Btn"
          type="button"
          value="Отправить"
          disabled={props.btnLock}
        />
      </form>
    </>
  );
};

export default FormMessage;
