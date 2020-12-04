
import createDataContext from "./createDataContext";
import server from "../api/server";


const habitsReducer = (state, action) => {
  switch (action.type) {
    case "get_habits":
      return action.payload;
    case "edit_habit":
      return state.map((habit) => {
        return habit.id === action.payload.id ? action.payload : habit;
      });
    case "delete_habit":
      return state.filter((habit) => habit.id !== action.payload);
    case "get_dates":
      return state.map((habit) => {
        return habit.id === action.payload
      });
    default:
      return state;
  }
};

const getHabits = (dispatch) => {
  return async () => {
    const response = await server.get("");
    dispatch({type: "get_habits", payload: response.data});
  }
};

const addHabit = (dispatch) => {
  return async (title, color, callback) => {
    await server.post("/add", {title, color});
      if (callback) {
        callback();
      }
  }
};

const editHabit = (dispatch) => {
  return async (id, title, color, callback) => {
    await server.patch(`/update/${id}`, {title, color});
    dispatch({type: "edit_habit", payload: {id, title, color}});
      if (callback) {
        callback();
      }
  }
};

const markHabitDone = (dispatch) => {
  return async (id, date, callback) => {
    await server.post(`/complete/${id}`, {date});
    if (callback) {
      callback();
    }
  }
};

const undoDone = (dispatch) => {
  return async (id) => {
    await server.patch(`/undocomplete/${id}`);
  }
}

const deleteHabit = (dispatch) => {
  return async (id) => {
    await server.delete(`/${id}`);
    dispatch({type: "delete_habit", paylaod: id});
  }
};

const getDoneDates = (dispatch) => {
  return async (id) => {
    const response = await server.get(`/dates/${id}`);
    dispatch({type: "get_dates", payload: response.data});
  }
}

export const { Context, Provider } = createDataContext(
  habitsReducer,
  { getHabits, addHabit, editHabit, deleteHabit, markHabitDone, undoDone, getDoneDates },
  []);
