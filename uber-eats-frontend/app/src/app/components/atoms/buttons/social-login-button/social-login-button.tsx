import { Button } from '@chakra-ui/react';
import { ISocialLoginButtonProps } from './props';

export const SocialLoginButton = (args: ISocialLoginButtonProps) => {
   const { text } = args;
   return (
      <Button
         mt={4} 
         bg={'#222426'} 
         color={'#ffffff'} 
         w="100%"
         minHeight={'48px'}
         fontWeight={500}
         _hover={
            {
               bgColor:'#282c2d'
            }
         }
      >
         {text}
      </Button>
   );
};