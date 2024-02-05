import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Course = {
  __typename?: 'Course';
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type CreateCourseInput = {
  title: Scalars['String']['input'];
};

export type CreateProductInput = {
  title: Scalars['String']['input'];
};

export type CreatePurchaseInput = {
  productId: Scalars['String']['input'];
};

export type Enrollment = {
  __typename?: 'Enrollment';
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  course: Course;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  student: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCourse: Course;
  createProduct: Product;
  createPurchase: Purchase;
};


export type MutationCreateCourseArgs = {
  data: CreateCourseInput;
};


export type MutationCreateProductArgs = {
  data: CreateProductInput;
};


export type MutationCreatePurchaseArgs = {
  data: CreatePurchaseInput;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Purchase = {
  __typename?: 'Purchase';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  status: PurchaseStatus;
};

/** Available purchase status */
export enum PurchaseStatus {
  Approved = 'APPROVED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export type Query = {
  __typename?: 'Query';
  course: Course;
  courses: Array<Course>;
  enrollments: Array<Enrollment>;
  me: User;
  products: Array<Product>;
  purchases: Array<Purchase>;
  students: Array<User>;
};


export type QueryCourseArgs = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  authUserId: Scalars['ID']['output'];
  enrollments: Array<Enrollment>;
  purchases: Array<Purchase>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', authUserId: string } };

export type GetProcuctsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProcuctsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, title: string, slug: string }> };


export const MeDocument = gql`
    query Me {
  me {
    authUserId
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetProcuctsDocument = gql`
    query GetProcucts {
  products {
    id
    title
    slug
  }
}
    `;

/**
 * __useGetProcuctsQuery__
 *
 * To run a query within a React component, call `useGetProcuctsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProcuctsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProcuctsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProcuctsQuery(baseOptions?: Apollo.QueryHookOptions<GetProcuctsQuery, GetProcuctsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProcuctsQuery, GetProcuctsQueryVariables>(GetProcuctsDocument, options);
      }
export function useGetProcuctsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProcuctsQuery, GetProcuctsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProcuctsQuery, GetProcuctsQueryVariables>(GetProcuctsDocument, options);
        }
export function useGetProcuctsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProcuctsQuery, GetProcuctsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProcuctsQuery, GetProcuctsQueryVariables>(GetProcuctsDocument, options);
        }
export type GetProcuctsQueryHookResult = ReturnType<typeof useGetProcuctsQuery>;
export type GetProcuctsLazyQueryHookResult = ReturnType<typeof useGetProcuctsLazyQuery>;
export type GetProcuctsSuspenseQueryHookResult = ReturnType<typeof useGetProcuctsSuspenseQuery>;
export type GetProcuctsQueryResult = Apollo.QueryResult<GetProcuctsQuery, GetProcuctsQueryVariables>;