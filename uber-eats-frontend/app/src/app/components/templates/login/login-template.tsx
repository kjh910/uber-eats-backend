'use client';

import { LOGIN_MUTATION } from '@/lib/mutations';
import { LoginMutation, LoginMutationVariables } from '@/__generated__/graphql';

import { useMutation } from '@apollo/client';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LoginButton } from '../../atoms/buttons/login-button/login-button';
import { ErrorMessage } from '../../atoms/error-message/error-message';
import { EmailInput } from '../../atoms/input/email-input/email-input';
import { PasswordInput } from '../../atoms/input/password-input/password-input';
import { SocialLoginGroup } from '../../moleclues/social-login-group/social-login-group';
import { LoginFormType } from './types';

export default function LoginTemplate() {
   const { register, handleSubmit, formState:{ errors, isValid }, trigger } = useForm<LoginFormType>(
      {
         mode:'onChange',
      }
   );

   const router = useRouter();

   const [loginMutation, { data: loginMutationResult, loading }] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION);

   const onValid = async (form:LoginFormType) => {
      if(isValid && !loading){
         loginMutation(
            {
               variables:{
                  loginInput: {
                     email:form.email,
                     password:form.password
                  }
               }
            }
         ).then((value) => {
            if(value.data?.login.ok && value.data.login.token) {
               window.localStorage.setItem('access_token',value.data.login.token);
               router.push('/home');
            }
         });
      }
   };

   useEffect(() => {
      trigger();
   },[]);

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
               {loginMutationResult?.login.error && (
                  <ErrorMessage
                     message={loginMutationResult.login.error}
                  />
               )}
               <form onSubmit={handleSubmit(onValid)}>
                  <EmailInput 
                     register={register}
                     errors={errors}
                  />
                  <Box h={'8px'} />
                  <PasswordInput
                     register={register}
                     errors={errors}
                  />
                  <LoginButton/>
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
