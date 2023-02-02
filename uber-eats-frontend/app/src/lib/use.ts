

import { LoginMutationVariables, useLoginMutation } from '@/__generated__';
import { useQueryClient } from '@tanstack/react-query';
import { useConfiguredGraphQLClient } from './useConfiguredGraphQLClient';

const invalidateQueryKey = 'searchCustomer';
const snackbarMessages = {
  success: `カスタマーを更新しました`,
  error: `エラーが発生しました`,
} as const;

export function useUpdateCustomerMutation() {
  const queryClient = useQueryClient();
  const { createGraphQLAuthClient } = useConfiguredGraphQLClient();

  const { mutateAsync, isLoading: isLoadingUpdateCustomer } =
    useLoginMutation(createGraphQLAuthClient(), {
      onSuccess: () => {
        console.log(1234);
      },
    });

  const mutateUpdateCustomer = async (
    variables: LoginMutationVariables
  ) =>
    await mutateAsync({
      loginInput:{
        email:variables.loginInput.email,
        password:variables.loginInput.password
      }
    });

  return {
    mutateUpdateCustomer,
    isLoadingUpdateCustomer,
  };