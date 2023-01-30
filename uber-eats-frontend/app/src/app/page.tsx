'use client';

import { useRecoilState } from 'recoil';
import HomeTemplate from './components/templates/home/home-template';
import SignInTemplate from './components/templates/home/sign-in-template';
import { signInClickState } from './recoil/atoms/sign-in-click-state/sign-in-click-state';

export default function Home() {
   const [ isSignInClicked ] = useRecoilState(signInClickState);
   console.log(isSignInClicked);
   return (
      <>
         <HomeTemplate />
         {
            isSignInClicked && 
               <SignInTemplate />
         }
      </>
   );
}
