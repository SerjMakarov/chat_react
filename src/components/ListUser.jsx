import { useState} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import "./ListUser.css";

export const ListUser = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Paper className="ListUser" elevation={3}>
        <List>
          {props.arChats.map((value, id) => {
            value.id = id;
            return (
              <ListItemButton
                selected={selectedIndex === id}
                onClick={(event) => handleListItemClick(event, id)}
              >
                <ListItem key={id}>
                  <ListItemAvatar>
                    <Avatar></Avatar>
                  </ListItemAvatar>
                  <ListItemText>{value.name}</ListItemText>
                </ListItem>
              </ListItemButton>
            );
          })}
        </List>
      </Paper>
    </>
  );
};
