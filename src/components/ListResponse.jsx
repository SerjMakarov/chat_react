import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./ListResponse.css";

const ListResponse = (props) => {
  return (
    <Box>
      <Paper className="ListResponse" elevation={3}>
          <ul>
            {props.messageList.map((val, id) => {
              return (
                <li key={id} className="Message">
                  {val.message}
                </li>
              );
            })}
          </ul>
      </Paper>
    </Box>
  );
};

export default ListResponse;
