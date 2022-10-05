import axios from 'axios';

const API_KEY = 'AIzaSyAH-i4A6Ab43k2dx7lSwSyIuNZDRkBTBcA';
const END_POINT =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
export async function signUp(email, password) {
  const response = await axios.post(END_POINT + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
  return token;
  // console.log(response);
}

export async function signIn(email, password) {
  const response = await axios
    .post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
        API_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      },
    )
  const token = response.data.idToken;
  return token;
}
