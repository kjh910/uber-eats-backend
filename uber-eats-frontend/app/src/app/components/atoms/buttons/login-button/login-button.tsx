'use client';

import { LoginFormType } from '@/app/components/templates/login/types';
import { LoginFormState } from '@/app/recoil/atoms/login-form-state/login-form-state';
import { Button } from '@chakra-ui/react';

export const LoginButton = () => {

   return (
      <Button
         type={'submit'}
         mt={4} 
         bg={'#000000'} 
         color={'#ffffff'} 
         w="100%"
         minHeight={'48px'}
         _hover={
            {
               bgColor:'#262a2b'
            }
         }
         _disabled={
            {
               bgColor: 'gray'
            }
         }
      >
        継行
      </Button>
   );
};