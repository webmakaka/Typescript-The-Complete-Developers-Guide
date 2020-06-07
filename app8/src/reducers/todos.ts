import { Todo, FetchTodosAction, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
