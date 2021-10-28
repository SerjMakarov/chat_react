import "./FormMessage.css";

const FormMessage = (props) => {
  return (
    <>
      <form className="MainForm">
        <label className="MainForm__Item">
          <div className="MainForm__Title">Сообщение:</div>
          <input
            onChange={props.handleChange}
            className="MainForm__Message"
            type="text"
            name="message"
            value={props.inputEmpty}
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
