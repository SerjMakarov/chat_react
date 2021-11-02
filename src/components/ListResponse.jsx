import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "./ListResponse.css";

const ListResponse = (props) => {
  return (
    <Box>
      <Paper className="ListResponse" elevation={3}>
        <ul>
          {props.messageList.map((val, id) => {
            return (
              <li key={id} className="Message">
                <Typography variant="h6">{val.message}</Typography>
              </li>
            );
          })}
        </ul>
      </Paper>
    </Box>
  );
};

export default ListResponse;
