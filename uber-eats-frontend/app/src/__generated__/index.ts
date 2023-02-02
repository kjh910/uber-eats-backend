import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
   return async (): Promise<TData> => client.request({
      document: query,
      variables,
      requestHeaders
   });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthUserOutput = {
  __typename?: 'AuthUserOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user: User;
};

export type Category = {
  __typename?: 'Category';
  coverImg?: Maybe<Scalars['String']>;
  createAt: Scalars['DateTime'];
  id: Scalars['Float'];
  name: Scalars['String'];
  restaurants?: Maybe<Array<Restaurant>>;
  slug: Scalars['String'];
  updateAt: Scalars['DateTime'];
};

export type CreateAccountInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
};

export type CreateAccountOutput = {
  __typename?: 'CreateAccountOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateRestaurantInput = {
  address?: Scalars['String'];
  categoryName: Scalars['String'];
  coverImg: Scalars['String'];
  name: Scalars['String'];
};

export type CreateRestaurantOutput = {
  __typename?: 'CreateRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditProfileInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CreateAccountOutput;
  createRestaurant: CreateRestaurantOutput;
  editProfile: EditProfileOutput;
  login: LoginOutput;
  verifyEmail: VerifyEmailOutput;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateRestaurantArgs = {
  input: CreateRestaurantInput;
};


export type MutationEditProfileArgs = {
  input: EditProfileInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type Query = {
  __typename?: 'Query';
  hi: Scalars['Boolean'];
  me: AuthUserOutput;
  userProfile: UserProfileOutput;
};


export type QueryUserProfileArgs = {
  userId: Scalars['Float'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  address: Scalars['String'];
  category?: Maybe<Category>;
  coverImg: Scalars['String'];
  createAt: Scalars['DateTime'];
  id: Scalars['Float'];
  name: Scalars['String'];
  owner: User;
  updateAt: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  createAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Float'];
  password: Scalars['String'];
  restaurants: Array<Restaurant>;
  role: UserRole;
  updateAt: Scalars['DateTime'];
  verified: Scalars['Boolean'];
};

export type UserProfileOutput = {
  __typename?: 'UserProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export enum UserRole {
  Client = 'Client',
  Delivery = 'Delivery',
  Owner = 'Owner'
}

export type VerifyEmailInput = {
  code: Scalars['String'];
};

export type VerifyEmailOutput = {
  __typename?: 'VerifyEmailOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', ok: boolean, token?: string | null, error?: string | null } };


export const LoginDocument = `
    mutation login($loginInput: LoginInput!) {
  login(input: $loginInput) {
    ok
    token
    error
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
   ) =>
      useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
         ['login'],
         (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
         options
      );