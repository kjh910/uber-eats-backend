'use client';

import { Box, Input } from '@chakra-ui/react';
import { ErrorMessage } from '../../error-message/error-message';
import { IEmailInputProps } from './props';

export const EmailInput = (args:IEmailInputProps) => {
   const { register, errors } = args;
   return (
      <Box
         bg={'transparent'}
         borderRadius={'8px'}
         border={'2px solid transparent'}
      >
         <Input
            {...register('email', {
               required:'メールアドレスは必須項目です',
               pattern: {
                  value: /^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+/,
                  message: '正しいメールアドレス形式を入力してください'
               }
            })}
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
         <ErrorMessage 
            message={errors.email?.message}
         />
      </Box>
   );
};