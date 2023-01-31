import { LoginFormType } from '@/app/components/templates/home/types';
import { atom } from 'recoil';

export const LoginFormState = atom<LoginFormType>({
   key: 'loginFormState', // unique ID (with respect to other atoms/selectors)
   default: {
      email:'',
      password:'',
   }, // default value (aka initial value)
});