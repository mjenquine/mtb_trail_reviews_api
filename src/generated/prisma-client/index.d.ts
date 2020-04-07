// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  review: (where?: ReviewWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  review: (where: ReviewWhereUniqueInput) => ReviewNullablePromise;
  reviews: (args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Review>;
  reviewsConnection: (args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ReviewConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createReview: (data: ReviewCreateInput) => ReviewPromise;
  updateReview: (args: {
    data: ReviewUpdateInput;
    where: ReviewWhereUniqueInput;
  }) => ReviewPromise;
  updateManyReviews: (args: {
    data: ReviewUpdateManyMutationInput;
    where?: ReviewWhereInput;
  }) => BatchPayloadPromise;
  upsertReview: (args: {
    where: ReviewWhereUniqueInput;
    create: ReviewCreateInput;
    update: ReviewUpdateInput;
  }) => ReviewPromise;
  deleteReview: (where: ReviewWhereUniqueInput) => ReviewPromise;
  deleteManyReviews: (where?: ReviewWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  review: (
    where?: ReviewSubscriptionWhereInput
  ) => ReviewSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ReviewOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "trailName_ASC"
  | "trailName_DESC"
  | "trailCondition_ASC"
  | "trailCondition_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ReviewWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ReviewWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  trailName?: Maybe<String>;
  trailName_not?: Maybe<String>;
  trailName_in?: Maybe<String[] | String>;
  trailName_not_in?: Maybe<String[] | String>;
  trailName_lt?: Maybe<String>;
  trailName_lte?: Maybe<String>;
  trailName_gt?: Maybe<String>;
  trailName_gte?: Maybe<String>;
  trailName_contains?: Maybe<String>;
  trailName_not_contains?: Maybe<String>;
  trailName_starts_with?: Maybe<String>;
  trailName_not_starts_with?: Maybe<String>;
  trailName_ends_with?: Maybe<String>;
  trailName_not_ends_with?: Maybe<String>;
  trailCondition?: Maybe<String>;
  trailCondition_not?: Maybe<String>;
  trailCondition_in?: Maybe<String[] | String>;
  trailCondition_not_in?: Maybe<String[] | String>;
  trailCondition_lt?: Maybe<String>;
  trailCondition_lte?: Maybe<String>;
  trailCondition_gt?: Maybe<String>;
  trailCondition_gte?: Maybe<String>;
  trailCondition_contains?: Maybe<String>;
  trailCondition_not_contains?: Maybe<String>;
  trailCondition_starts_with?: Maybe<String>;
  trailCondition_not_starts_with?: Maybe<String>;
  trailCondition_ends_with?: Maybe<String>;
  trailCondition_not_ends_with?: Maybe<String>;
  postedBy?: Maybe<UserWhereInput>;
  AND?: Maybe<ReviewWhereInput[] | ReviewWhereInput>;
  OR?: Maybe<ReviewWhereInput[] | ReviewWhereInput>;
  NOT?: Maybe<ReviewWhereInput[] | ReviewWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  reviews_every?: Maybe<ReviewWhereInput>;
  reviews_some?: Maybe<ReviewWhereInput>;
  reviews_none?: Maybe<ReviewWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface ReviewCreateInput {
  id?: Maybe<ID_Input>;
  trailName: String;
  trailCondition: String;
  postedBy?: Maybe<UserCreateOneWithoutReviewsInput>;
}

export interface UserCreateOneWithoutReviewsInput {
  create?: Maybe<UserCreateWithoutReviewsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutReviewsInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
}

export interface ReviewUpdateInput {
  trailName?: Maybe<String>;
  trailCondition?: Maybe<String>;
  postedBy?: Maybe<UserUpdateOneWithoutReviewsInput>;
}

export interface UserUpdateOneWithoutReviewsInput {
  create?: Maybe<UserCreateWithoutReviewsInput>;
  update?: Maybe<UserUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<UserUpsertWithoutReviewsInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutReviewsDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput;
  create: UserCreateWithoutReviewsInput;
}

export interface ReviewUpdateManyMutationInput {
  trailName?: Maybe<String>;
  trailCondition?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  reviews?: Maybe<ReviewCreateManyWithoutPostedByInput>;
}

export interface ReviewCreateManyWithoutPostedByInput {
  create?: Maybe<
    ReviewCreateWithoutPostedByInput[] | ReviewCreateWithoutPostedByInput
  >;
  connect?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
}

export interface ReviewCreateWithoutPostedByInput {
  id?: Maybe<ID_Input>;
  trailName: String;
  trailCondition: String;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  reviews?: Maybe<ReviewUpdateManyWithoutPostedByInput>;
}

export interface ReviewUpdateManyWithoutPostedByInput {
  create?: Maybe<
    ReviewCreateWithoutPostedByInput[] | ReviewCreateWithoutPostedByInput
  >;
  delete?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
  connect?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
  set?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
  disconnect?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
  update?: Maybe<
    | ReviewUpdateWithWhereUniqueWithoutPostedByInput[]
    | ReviewUpdateWithWhereUniqueWithoutPostedByInput
  >;
  upsert?: Maybe<
    | ReviewUpsertWithWhereUniqueWithoutPostedByInput[]
    | ReviewUpsertWithWhereUniqueWithoutPostedByInput
  >;
  deleteMany?: Maybe<ReviewScalarWhereInput[] | ReviewScalarWhereInput>;
  updateMany?: Maybe<
    | ReviewUpdateManyWithWhereNestedInput[]
    | ReviewUpdateManyWithWhereNestedInput
  >;
}

export interface ReviewUpdateWithWhereUniqueWithoutPostedByInput {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutPostedByDataInput;
}

export interface ReviewUpdateWithoutPostedByDataInput {
  trailName?: Maybe<String>;
  trailCondition?: Maybe<String>;
}

export interface ReviewUpsertWithWhereUniqueWithoutPostedByInput {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutPostedByDataInput;
  create: ReviewCreateWithoutPostedByInput;
}

export interface ReviewScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  trailName?: Maybe<String>;
  trailName_not?: Maybe<String>;
  trailName_in?: Maybe<String[] | String>;
  trailName_not_in?: Maybe<String[] | String>;
  trailName_lt?: Maybe<String>;
  trailName_lte?: Maybe<String>;
  trailName_gt?: Maybe<String>;
  trailName_gte?: Maybe<String>;
  trailName_contains?: Maybe<String>;
  trailName_not_contains?: Maybe<String>;
  trailName_starts_with?: Maybe<String>;
  trailName_not_starts_with?: Maybe<String>;
  trailName_ends_with?: Maybe<String>;
  trailName_not_ends_with?: Maybe<String>;
  trailCondition?: Maybe<String>;
  trailCondition_not?: Maybe<String>;
  trailCondition_in?: Maybe<String[] | String>;
  trailCondition_not_in?: Maybe<String[] | String>;
  trailCondition_lt?: Maybe<String>;
  trailCondition_lte?: Maybe<String>;
  trailCondition_gt?: Maybe<String>;
  trailCondition_gte?: Maybe<String>;
  trailCondition_contains?: Maybe<String>;
  trailCondition_not_contains?: Maybe<String>;
  trailCondition_starts_with?: Maybe<String>;
  trailCondition_not_starts_with?: Maybe<String>;
  trailCondition_ends_with?: Maybe<String>;
  trailCondition_not_ends_with?: Maybe<String>;
  AND?: Maybe<ReviewScalarWhereInput[] | ReviewScalarWhereInput>;
  OR?: Maybe<ReviewScalarWhereInput[] | ReviewScalarWhereInput>;
  NOT?: Maybe<ReviewScalarWhereInput[] | ReviewScalarWhereInput>;
}

export interface ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput;
  data: ReviewUpdateManyDataInput;
}

export interface ReviewUpdateManyDataInput {
  trailName?: Maybe<String>;
  trailCondition?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface ReviewSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ReviewWhereInput>;
  AND?: Maybe<ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput>;
  OR?: Maybe<ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput>;
  NOT?: Maybe<ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Review {
  id: ID_Output;
  createdAt: DateTimeOutput;
  trailName: String;
  trailCondition: String;
}

export interface ReviewPromise extends Promise<Review>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  trailName: () => Promise<String>;
  trailCondition: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
}

export interface ReviewSubscription
  extends Promise<AsyncIterator<Review>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  trailName: () => Promise<AsyncIterator<String>>;
  trailCondition: () => Promise<AsyncIterator<String>>;
  postedBy: <T = UserSubscription>() => T;
}

export interface ReviewNullablePromise
  extends Promise<Review | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  trailName: () => Promise<String>;
  trailCondition: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  reviews: <T = FragmentableArray<Review>>(args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  reviews: <T = Promise<AsyncIterator<ReviewSubscription>>>(args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  reviews: <T = FragmentableArray<Review>>(args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ReviewConnection {
  pageInfo: PageInfo;
  edges: ReviewEdge[];
}

export interface ReviewConnectionPromise
  extends Promise<ReviewConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ReviewEdge>>() => T;
  aggregate: <T = AggregateReviewPromise>() => T;
}

export interface ReviewConnectionSubscription
  extends Promise<AsyncIterator<ReviewConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ReviewEdgeSubscription>>>() => T;
  aggregate: <T = AggregateReviewSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ReviewEdge {
  node: Review;
  cursor: String;
}

export interface ReviewEdgePromise extends Promise<ReviewEdge>, Fragmentable {
  node: <T = ReviewPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ReviewEdgeSubscription
  extends Promise<AsyncIterator<ReviewEdge>>,
    Fragmentable {
  node: <T = ReviewSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateReview {
  count: Int;
}

export interface AggregateReviewPromise
  extends Promise<AggregateReview>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateReviewSubscription
  extends Promise<AsyncIterator<AggregateReview>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ReviewSubscriptionPayload {
  mutation: MutationType;
  node: Review;
  updatedFields: String[];
  previousValues: ReviewPreviousValues;
}

export interface ReviewSubscriptionPayloadPromise
  extends Promise<ReviewSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ReviewPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ReviewPreviousValuesPromise>() => T;
}

export interface ReviewSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ReviewSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ReviewSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ReviewPreviousValuesSubscription>() => T;
}

export interface ReviewPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  trailName: String;
  trailCondition: String;
}

export interface ReviewPreviousValuesPromise
  extends Promise<ReviewPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  trailName: () => Promise<String>;
  trailCondition: () => Promise<String>;
}

export interface ReviewPreviousValuesSubscription
  extends Promise<AsyncIterator<ReviewPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  trailName: () => Promise<AsyncIterator<String>>;
  trailCondition: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Review",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;