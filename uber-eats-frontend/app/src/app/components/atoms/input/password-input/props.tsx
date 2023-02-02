import { LoginFormType } from '@/app/components/templates/login/types';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface IPasswordInputProps {
    register: UseFormRegister<LoginFormType>;
    errors: FieldErrors<LoginFormType>;
}