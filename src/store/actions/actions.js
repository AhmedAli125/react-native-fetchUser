import {
  GET_USERS,
  USERS_FETCHED,
  FETCH_USERS_FAILED,
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  DELETE_USER,
  REMOVE_FROM_DELETED,
  REMOVE_TOAST,
} from '../constants/type';

export const getUsers = (payload) => {
  return {
    type: GET_USERS,
    payload,
  };
};

export const usersFetched = (payload) => {
  return {
    type: USERS_FETCHED,
    payload,
  };
};

export const usersfetchFailed = (payload) => {
  return {
    type: FETCH_USERS_FAILED,
    payload,
  };
};

export const setCurrentUser = (payload) => {
  return {
    type: SET_CURRENT_USER,
    payload,
  };
};

export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER,
  };
};

export const deleteUser = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};

export const removeFromDeleted = (payload) => {
  return {
    type: REMOVE_FROM_DELETED,
    payload,
  };
};

export const removeToast = () => {
  return {
    type: REMOVE_TOAST,
  };
};
