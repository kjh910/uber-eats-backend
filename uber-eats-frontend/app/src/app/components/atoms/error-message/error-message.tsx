'use client';

import { Box, Text } from '@chakra-ui/react';
import { IErrorMessage } from './props';

export const ErrorMessage = (args:IErrorMessage) => {
   const { message } = args;
   return (
      <>
         {
            message && (
               <Box>
                  <Text
                     mt={'6px'}
                     color={'red.400'}
                  >
                     {message}
                  </Text>
               </Box>
            )
         }
      </>
   );
};