'use client';

import { Box, Input } from '@chakra-ui/react';
import { ErrorMessage } from '../../error-message/error-message';
import { IPasswordInputProps } from './props';

export const PasswordInput = (args: IPasswordInputProps) => {
   const { register, errors } = args;
   return (
      <Box
         bg={'transparent'}
         borderRadius={'8px'}
         border={'2px solid transparent'}
      >
         <Input
            {...register('password', {
               required:'パスワードは必須項目です',
            })}
            type={'password'}
            placeholder="パスワードを入力"
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
            message={errors.password?.message}
         />
      </Box>
   );
};