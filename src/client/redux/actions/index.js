export const REQUEST_APPS = 'REQUEST_APPS';
export const RECEIVE_APPS = 'RECEIVE_APPS';

const requestApps=() =>{ 
    return {
        type: REQUEST_APPS
    }
}

const receiveApps=(json) =>{
    return {
        type: RECEIVE_APPS,
        apps: json
    }
}

const fetchApps=() => async dispatch => {
    dispatch(requestApps());
    const response = await fetch(`assets/data.json`);
    const json = await response.json();
    return dispatch(receiveApps(json));
}

const shouldFetchApps=(state) =>{
    const apps = state.apps;
    if(apps.length == 0){
        return true;
    } else if (state.isFetching) {
        return false;
    }
}

export const fetchAppsIfNeeded = ()=> (dispatch, getState) =>{
    if(shouldFetchApps(getState())) {
        return dispatch(fetchApps());
    }
}