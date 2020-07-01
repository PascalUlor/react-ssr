import { REQUEST_APPS,  RECEIVE_APPS } from '../actions';

const initialState = {
    isFetching: false, apps: []
  }

const apps = (state = initialState, action ) =>{
    switch (action.type) {
        case REQUEST_APPS:
          return Object.assign({}, state, {
            isFetching: true
          });
        case RECEIVE_APPS:
          return { ...state, 
            isFetching: false,
            apps: action.apps
          }
        default:
          return state
      }
}

export default apps;