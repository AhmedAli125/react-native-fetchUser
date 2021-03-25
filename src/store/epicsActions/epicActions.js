import {GET_USERS} from '../constants/type';
import {getUsers} from '../service/service';
import {usersFetched, userFetchFailed} from '../actions/actions';
import {select, combineEpics} from 'redux-most';
import {fromPromise, of} from 'most';

const getUsersEpic = ($action) =>
  $action.thru(select(GET_USERS)).flatMap((action) => {
    return fromPromise(getUsers(action.payload))
      .flatMap((res) => {
        return of(usersFetched(res.data));
      })
      .recoverWith((error) => {
        return of(userFetchFailed(error));
      });
  });

export default combineEpics([getUsersEpic]);
