import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
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
          <Button onClick={props.onCreate}>+</Button>
          <Button onClick={props.onDelete}>-</Button>
          {props.arChats.map((value, id) => {
            value.id = id;
            return (
              <ListItemButton
                key={id}
                selected={selectedIndex === id}
                onClick={(event) => handleListItemClick(event, id)}
              >
                <ListItem>
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
