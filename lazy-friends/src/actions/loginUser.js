// user files
import { ROOT_URL } from '../constants';

export const loginUser = (username, password) => {
  return (dispatch) => {
    // dispatch({ type: 'AUTHENTICATING_USER' })
    dispatch(authenticatingUser())
    fetch(`${ROOT_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
      .then(response => {
        if (response.ok) { //was the HTTP status code < 400
          return response.json()
        } else {
          throw response
        }
      })
      .then(JSONResponse => {
        // debugger
        console.log('%c INSIDE YE OLDE .THEN', 'color: navy')
        localStorage.setItem('jwt', JSONResponse.jwt)
        // dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
        dispatch(setCurrentUser(JSONResponse.user))
      })
      .catch(r =>
        {console.log(r)
        r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message }))}
      )
  }
}

export const signUpUser = ({ name, username, email, password, location, coordinates, profile_url }) => {
  return (dispatch) => {
    // dispatch({ type: 'AUTHENTICATING_USER' })
    dispatch(authenticatingUser())
    fetch(`${ROOT_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name,
          username,
          email,
          password,
          location,
          profile_url,
          coordinates
        }
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(JSONResponse => {
        localStorage.setItem('jwt', JSONResponse.jwt)
        dispatch(setCurrentUser(JSONResponse.user))
      })
      .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}

export const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return (dispatch) => {
    dispatch(authenticatingUser()) //tells the app we are fetching
    fetch(`${ROOT_URL}/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)))
  }
}

export const setCurrentUser = (userData) => ({
  type: 'SET_CURRENT_USER',
  payload: userData
})

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

// tell our app we're currently fetching
export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })
