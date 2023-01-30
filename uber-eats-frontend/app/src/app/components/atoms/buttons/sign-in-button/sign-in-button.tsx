'use client';

import { signInClickState } from '@/app/recoil/atoms/sign-in-click-state/sign-in-click-state';
import { Button, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { ISignInButton } from './props';

export const SignInButton = (args:ISignInButton) => {
//    const { onOpen } = args;
   const [, setIsSignInClicked] = useRecoilState(signInClickState);

   const onClickSignInButton = () => {
      setIsSignInClicked(true);
   };
   return (
      <Button
         onClick={onClickSignInButton}
         display={{ base: 'none', md: 'inline-flex' }}
         fontSize={'sm'}
         fontWeight={400}
         bg={'#000000'}
         _hover={{
            bg: '#282C2D'
         }}
      >
         <Text
            color={'#ffffff'}
         >
            Sign In
         </Text>
      </Button>
   );
};