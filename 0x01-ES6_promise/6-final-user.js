import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all(
    [signUpUser(firstName, lastName),
      uploadPhoto(fileName)],
  ).then((v) => ([{
    status: 200,
    value: v[0].firstName,
  },
  {
    status: 200,
    value: v[0].lastName,
  }])).catch((err) => ({ status: 400, value: err.message }));
}
