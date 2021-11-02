import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import "./ListUser.css";

export const ListUser = (props) => {
  return (
    <>
      <Paper className="ListUser" elevation={3}>
        <List>
          {props.arChats.map((value, id) => {
              return (
                <ListItem key={id}>
                  <ListItemAvatar>
                    <Avatar></Avatar>
                  </ListItemAvatar>
                  <ListItemText>{value.name}</ListItemText>
                </ListItem>
              );
          })}
        </List>
      </Paper>
    </>
  );
};
