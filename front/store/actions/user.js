import { LOG_USER, REG_USER, LOG_OUT } from '../constants/index';
import axios from 'axios';

export const logUser = user => ({
  type: LOG_USER,
  user
});

export const regUser = user => ({
  type: REG_USER,
  user
});

export const logOut = user => ({
  type: LOG_OUT
});

export const userLogOut = () => dispatch =>
  axios
    .get('/api/user/logout')
    .then(() => dispatch(logOut()))
    .catch(err => console.log(err));

//Ruta en el back a /register que haga un User.create en la db

export const userRegUser = (name, email, password) => dispatch =>
  axios
    .post('/api/user/register', { name, email, password })
    .then(res => res.data)
    .then(user => dispatch(regUser(user)))
    .catch(err => console.log(err));

// Para esta funcion necesito una ruta en el back a /login que haga un findByPk para buscar un usuario particular y loguearlo

export const googleLogIn = () => dispatch =>
  axios.post('/api/user/login/google').then(res => console.log(res));

// .then(user => dispatch(logUser(user)))
//  .catch(err => console.log(err));

export const userLogIn = (email, password) => dispatch =>
  axios
    .post('/api/user/login', { email, password })
    .then(res => res.data)
    .then(user => dispatch(logUser(user)))
    .catch(err => console.log(err));

export const fetchUser = () => dispatch => {
  axios
    .get('/api/user/me')
    .then(res => res.data)
    .then(user => dispatch(logUser(user)))
    .catch(err => console.log(err));
};
