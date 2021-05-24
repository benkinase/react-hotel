import { ActionTypes } from "../actions/ActionTypes";

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.PROJECT_LIST_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      };
    case ActionTypes.PROJECT_LIST_FAIL:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload,
      });
    case ActionTypes.PROJECT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
      };
    case ActionTypes.PROJECT_DELETE_FAIL:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload,
      });
    case ActionTypes.PROJECT_SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: [...state.projects, action.payload],
      };
    case ActionTypes.PROJECT_SAVE_FAIL:
      return Object.assign({}, state, { error: action.payload });
    case ActionTypes.CLEAR_PROJECTS:
      return {
        ...state,
        projects: [],
      };
    default:
      return state;
  }
}
