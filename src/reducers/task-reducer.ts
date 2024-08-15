import { TaskClass } from "../types";

export type TaskActions = { type: "add-task"; payload: { item: TaskClass } };

export type TasksState = {
  data: TaskClass[];
};

export const initialState = {
  data: [],
};

function randomId(): number {
  return Math.floor(Math.random() * 9999999999999);
}
export const TaskReducer = (
  state: TasksState = initialState,
  actions: TaskActions
) => {
  if (actions.type === "add-task") {
    let newState = [];

    const new_state: TaskClass = {
      ...actions.payload.item,
      id: randomId(),
      state: "Pendiente",
    };

    newState = [...state.data, new_state];

    return {
      ...state,
      data: newState,
    };
  }
};
