import { atom } from 'recoil';

export const IdTokenState = atom<string>({
   key: 'idTokenState', // unique ID (with respect to other atoms/selectors)
   default: '' // default value (aka initial value)
});