import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  let result = '';
  Promise.all([
    uploadPhoto().then((v) => {
      result += v.body;
    }),
    createUser().then((v) => {
      result += ` ${v.firstName} ${v.lastName}`;
    }),
  ]).then(() => {
    console.log(result);
  }).catch(() => console.log('Signup system offline'));
}
