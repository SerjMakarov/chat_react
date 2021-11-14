import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useSelector, useDispatch } from "react-redux";
import "./FormMessage.css";

const FormMessage = (props) => {
  




  return (
    <>
      <form onSubmit={props.handleSubmit} className="MainForm">
        <TextField
          onPaste={props.handleChange}
          onChange={props.handleChange}
          label="Сообщение"
          className="MainForm__Message"
          type="text"
          name="message"
          value={props.inputValue}
          autoComplete="off"
          ref={props.textInput}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={props.handleSubmit}
        >
          Отправить
        </Button>
      </form>
    </>
  );
};

export default FormMessage;
