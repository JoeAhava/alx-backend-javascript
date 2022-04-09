import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all(
    [
      signUpUser(firstName, lastName),
      uploadPhoto(fileName).catch((err) => err),
    ],
  ).then((v) => {
    const res = [];
    for (const value of v) {
      let status = 'sucess';
      if (value instanceof Error) {
        status = 'failed';
      }

      res.push({
        status,
        value,
      });
    }
    return res;
  });
}
