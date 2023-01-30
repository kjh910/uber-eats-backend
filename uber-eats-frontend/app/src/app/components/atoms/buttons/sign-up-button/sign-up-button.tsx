'use client';

import { Button, Text } from '@chakra-ui/react';
import { ISignUpButton } from './props';

export const SignUpButton = (args:ISignUpButton) => {
   const { onOpen } = args;
   return (
      <Button
         onClick={onOpen}
         fontSize={'sm'}
         fontWeight={400}
         bg={'#181A1B'}
         _hover={{
            bg: '#282C2D'
         }}
      >
         <Text
            color={'#ffffff'}
         >
            Sign Up
         </Text>
      </Button>
   );
};