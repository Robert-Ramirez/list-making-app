import uuid from 'uuid/v4';
import { CONSTANTS } from '..';

export const setActiveBoard = id => {
  return {
    type: CONSTANTS.SET_ACTIVE_BOARD,
    payload: id
  };
};

export const addBoard = title => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_BOARD,
    payload: { title, id }
  };
};
