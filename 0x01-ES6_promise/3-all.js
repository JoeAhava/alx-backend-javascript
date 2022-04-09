import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([
    uploadPhoto(),
    createUser(),
  ]).then((v) => {
    console.log(`${v[0].body} ${v[1].firstName} ${v[1].lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
