'use client';

import { Box, Flex, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { SignInButton } from '../../atoms/buttons/sign-in-button/sign-in-button';

export const BeforeLoginHeader = () => {
   const { onOpen: onOpenSignIn } = useDisclosure();
   // const { isOpen: isOpenSignUp, onClose: onCloseSignUp, onOpen: onOpenSignUp } = useDisclosure();
   return (
      <>
         <Box>
            <Flex
               bg={'#000000'}
               py={2}
               px={'5rem'}
               minH={'60px'}
               align={'center'}
            >
               <Flex
                  flex={{ base: 1, md: 'auto' }}
               >
                  <Text
                     color={'#ffffff'}
                  >
                  Uber-Eats
                  </Text>
               </Flex>
               <Flex
                  flex={{ base: 1 }} justify={{ base: 'center', md: 'end' }}
                  align={'left'}
               >
                  <Stack
                     flex={{ base: 1, md: 0 }}
                     justify={'flex-end'}
                     direction={'row'}
                     spacing={6}>
                     <SignInButton onOpen={onOpenSignIn} />
                     {/* <SignUpButton onOpen={onOpenSignUp} /> */}
                  </Stack>
               </Flex>
            </Flex>
         </Box>
      </>
   );
};