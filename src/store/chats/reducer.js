import { CREATE_CHAT, REMOVE_CHAT, SET_CHATS } from "./actions";
import { nanoid } from "nanoid";

const initialState = {
  chats: [
    { name: "Сергей", id:' ' },
    { name: "Джон", id: nanoid() },
    { name: "Бил", id: nanoid() },
    { name: "Иван", id: nanoid() },
  ],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CHAT: {
      return {
        chats: [...state.chats, action.payload],
      };
    }
    case SET_CHATS: {
      return {
        chats: [...action.payload],
      };
    }
    case REMOVE_CHAT: {
      console.log(state.chats);
      return {
        chats: state.chats.filter((item) => item.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
