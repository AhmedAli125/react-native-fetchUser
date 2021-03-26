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

const initialState = {
  users: [],
  deletedUsers: [],
  currentUser: null,
  loading: false,
  error: null,
  totalPages: 0,
  toast: {msg: '', flag: false},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
      };
    case USERS_FETCHED:
      let payload = action.payload.data;
      // let deletedUser;
      let userState = payload.filter((user) => {
        if (state.deletedUsers.length !== 0) {
          return !state.deletedUsers.find((deleted) => deleted.id === user.id);
        } else {
          return user;
        }
      });
      return {
        ...state,
        users: userState,
        loading: false,
        totalPages: action.payload.total_pages,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_CURRENT_USER:
      let key = action.payload.deleted === true ? 'deletedUsers' : 'users';
      return {
        ...state,
        currentUser: state[key].find((user) => user.id === action.payload.id),
      };
    case CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };
    case DELETE_USER:
      let user = state.users.find((element) => element.id === action.payload);
      user = {...user, deleted: true};
      let allUsers = state.users.filter(
        (userElement) => userElement.id !== action.payload,
      );

      let newDeletedUsers = [...state.deletedUsers, user];

      return {
        ...state,
        users: allUsers,
        deletedUsers: newDeletedUsers,
        toast: {msg: 'User Deleted Successfully', flag: true},
      };
    case REMOVE_FROM_DELETED:
      let recoveredUser = state.deletedUsers.find(
        // eslint-disable-next-line no-shadow
        (user) => user.id === action.payload,
      );
      recoveredUser = {...recoveredUser, deleted: false};
      let deletedArray = state.deletedUsers.filter(
        // eslint-disable-next-line no-shadow
        (user) => user.id !== action.payload,
      );
      return {
        ...state,
        deletedUsers: deletedArray,
        users: [...state.users, recoveredUser],
        toast: {msg: 'User Removed from Deleted List', flag: true},
      };
    case REMOVE_TOAST:
      return {
        ...state,
        toast: {msg: '', flag: false},
      };
    default:
      return state;
  }
};
