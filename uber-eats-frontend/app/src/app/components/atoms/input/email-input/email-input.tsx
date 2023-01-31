'use client';

import { Box, Input } from '@chakra-ui/react';
import { IEmailInputProps } from './props';

export const EmailInput = (args:IEmailInputProps) => {
   const { register } = args;
   return (
      <Box
         bg={'transparent'}
         borderRadius={'8px'}
         border={'2px solid transparent'}
      >
         <Input
            {...register('email')}
            type={'email'}
            placeholder="電話番号またはメールアドレスを入力"
            bg={'#222426'}
            lineHeight={'24px'}
            padding={'10px 0 10px 12px'}
            border={'none'}
            color={'#ffffff'}
            focusBorderColor={'#8C8273'}
            _placeholder={
               {
                  fontSize:'16px'
               }
            }
         />
      </Box>
   );
};