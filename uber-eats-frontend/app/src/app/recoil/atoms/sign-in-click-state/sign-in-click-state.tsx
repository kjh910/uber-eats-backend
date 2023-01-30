import { atom } from 'recoil';

export const signInClickState = atom({
   key: 'signInClickState', // unique ID (with respect to other atoms/selectors)
   default: false, // default value (aka initial value)
});