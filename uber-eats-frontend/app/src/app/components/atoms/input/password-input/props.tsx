import { LoginFormType } from '@/app/components/templates/home/types';
import { UseFormRegister } from 'react-hook-form';

export interface IPasswordInputProps {
    register: UseFormRegister<LoginFormType>
}