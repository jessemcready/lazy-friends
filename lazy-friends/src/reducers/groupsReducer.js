// user files
import { FETCH_GROUPS, CREATE_GROUP } from '../constants';

const defaultState = {
  groups: []
}

export default function(state=defaultState, action){
  switch(action.type){

    case FETCH_GROUPS:
      debugger
      // return { groups: [...action.payload.data] }
      return action.payload.data

    case CREATE_GROUP:
      debugger
      // return { groups: [...state.groups, action.payload.data] }
      return { ...state, groups: [...state.groups, action.payload.data] }

    default:
      return state
  }
}
