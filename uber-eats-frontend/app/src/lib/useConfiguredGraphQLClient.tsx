import { IdTokenState } from '@/app/recoil/atoms/id-token-state/id-token-state';
import { GraphQLClient } from 'graphql-request';
import { useRecoilValue } from 'recoil';

const endpoint = 'http://localhost:10041/graphql';

const buildHeaders = (idToken?: string) => {
   if (!idToken) {
      return {};
   }

   return {
      headers: {
         Authorization: `Bearer ${idToken}`,
      },
   };
};

export function useConfiguredGraphQLClient(): {
  createGraphQLClient: () => GraphQLClient;
  createGraphQLAuthClient: () => GraphQLClient;
  } {
   const idToken = useRecoilValue(IdTokenState);

   const createGraphQLClient = () => {
      return new GraphQLClient(endpoint);
   };

   const createGraphQLAuthClient = () => {
      return new GraphQLClient(endpoint, {
         ...buildHeaders(idToken),
      });
   };

   return {
      createGraphQLClient,
      createGraphQLAuthClient,
   };
}