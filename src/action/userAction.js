export function fetchUser() {
  return dispatch => {
    dispatch(fetchUsersBegin());
    return fetch("https://reqres.in/api/users?page=1&per_page=10")
      .then(res => res.json())
      .then(json => {
        dispatch(fetchUserSuccess(json.data));
        return json.data;
      })
      .catch(error => dispatch(fetchUserFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersBegin  = () =>({
  type:FETCH_USERS_BEGIN
});

export const fetchUserSuccess = () =>({
  type:FETCH_USERS_SUCCESS,
  payload:{users}
});

export const fetchUserFailure = () =>({
  type:FETCH_USERS_FAILURE,
  payload:error
});
