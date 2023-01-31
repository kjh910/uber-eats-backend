'use client';

import { LoginFormState } from '@/app/recoil/atoms/login-form-state/login-form-state';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { LoginButton } from '../../atoms/buttons/login-button/login-button';
import { EmailInput } from '../../atoms/input/email-input/email-input';
import { PasswordInput } from '../../atoms/input/password-input/password-input';
import { SocialLoginGroup } from '../../moleclues/social-login-group/social-login-group';
import { LoginFormType } from './types';

export default function HomeTemplate() {
   const { register, handleSubmit } = useForm<LoginFormType>(
      {
         mode:'onSubmit',
      }
   );

   const [, setLoginFormData] = useRecoilState(LoginFormState);

   const onValid = (form:LoginFormType) => {
      setLoginFormData(
         {
            ...form
         }
      );
   };
   return (
      <Flex
         justifyContent={'center'}
      >
         <VStack>
            <Box
               maxWidth={'360px'}
               minHeight={'max-content'}
            >
               <Text
                  pt={'16px'}
                  color={'#ffffff'}
                  fontSize={'24px'}
                  fontFamily={'sans-serif'}
                  fontWeight={400}
               >
                  電話番号またはメール アドレスをお知らせください
               </Text>
               <Box h={'8px'} />
               <form onSubmit={handleSubmit(onValid)}>
                  <EmailInput 
                     register={register}
                  />
                  <Box h={'8px'} />
                  <PasswordInput
                     register={register}
                  />
                  <LoginButton />
               </form>
               <Box h={'16px'} />
               <Flex
                  color={'#B5AFA6'}
                  pt={'4px'}
               >
                  <Text
                     color={'#B5AFA6'}
                     height={'1px'}
                     fontFamily={'sans-serif'}
                  >
                     ーーーーーーーーー
                  </Text>
                  <Text
                     pl="5px"
                     pr="5px"
                     fontFamily={'sans-serif'}
                  >
                     または
                  </Text>
                  <Text
                     color={'#B5AFA6'}
                     height={'1px'}
                     fontFamily={'sans-serif'}
                  >
                     ーーーーーーーーー
                  </Text>
               </Flex>
               <SocialLoginGroup />
               <Box h={'24px'} />
            </Box>

         </VStack>
      </Flex>
   );
}
