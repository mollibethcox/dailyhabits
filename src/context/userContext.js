
import createDataContext from "./createDataContext";
import server from "../api/users";


const usersReducer = (state, action) => {
  switch (action.type) {
    case "get_user":
      return action.payload;
    default:
      return state;
  }
};

const getUser = (dispatch) => {
  return async () => {
    const response = await server.get("/find");
    dispatch({type: "get_user", payload: response.data});
  }
};

const addUser = (dispatch) => {
  return async (username, password, callback) => {
    await server.post("/signup", {username, password});
      if (callback) {
        callback();
      }
  }
};




export const { Context, Provider } = createDataContext(
  usersReducer,
  { getUser, addUser},
  []);
