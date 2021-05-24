import { authAxios } from "../../utils/axios";
import { ActionTypes as Action } from "./ActionTypes";

// GET Projects
export const getProjects = () => (dispatch) => {
  authAxios
    .get(`/api/projects/`)
    .then((res) => {
      dispatch({
        type: Action.PROJECT_LIST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Action.PROJECT_LIST_FAIL,
        payload: err.response.data.detail,
      });
    });
};

// DELETE BOOK
export const deleteProject = (id) => (dispatch) => {
  authAxios
    .delete(`/api/projects/${id}/`)
    .then((res) => {
      dispatch({
        type: Action.PROJECT_DELETE_SUCCESS,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({
        type: Action.PROJECT_DELETE_FAIL,
        payload: err.response.data.detail,
      });
    });
};

// ADD BOOK
export const addProject = (project) => (dispatch) => {
  authAxios
    .post("/api/project/", project)
    .then((res) => {
      dispatch({
        type: Action.PROJECT_SAVE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Action.PROJECT_SAVE_FAIL,
        payload: err.response.data.detail,
      });
    });
};
