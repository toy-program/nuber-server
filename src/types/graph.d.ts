export const typeDefs = ["type Chat {\n  id: Int!\n  message: [Message]\n  participants: [User]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Message {\n  id: Int!\n  text: String!\n  chat: Chat!\n  author: User!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  address: String!\n  isFavorite: Boolean!\n}\n\ntype Query {\n  place: Place\n  GetMyProfile: GetMyProfileResponse!\n  user: User\n  verification: Verification\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAddress: String!\n  pickUpLat: Float!\n  pickUpLng: Float!\n  dropOffAddress: String!\n  dropOffLat: Float!\n  dropOffLng: Float!\n  price: Float!\n  duration: String!\n  distance: String!\n  driver: User!\n  passenger: User!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype CompleteEmailVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CompleteEmailVerification(key: String!): CompleteEmailVerificationResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(firstName: String!, lastName: String!, email: String!, password: String!, profilePhoto: String!, age: Int!, phoneNumber: String!): EmailSignUpResponse!\n  FacebookConnect(firstName: String!, lastName: String!, email: String!, facebookId: String!): FacebookConnectResponse!\n  RequestEmailVerification: RequestEmailVerificationResponse!\n  StartPhoneVerification(phoneNumber: String!): StartPhoneVerificationResponse!\n  CompletePhoneVerification(phoneNumber: String!, key: String!): CompletePhoneVerificationResponse!\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype RequestEmailVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype User {\n  id: Int!\n  email: String!\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String\n  facebookId: String\n  phoneNumber: String\n  profilePhoto: String\n  verificaitons: [Verification]\n  rideAsPassenger: [Ride]\n  rideAsDriver: [Ride]\n  createdAt: String!\n  updatedAt: String\n  fullName: String!\n  messages: [Message]\n  verifiedEmail: Boolean!\n  verifiedPhoneNumber: Boolean!\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastDirection: Float\n}\n\ntype StartPhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype CompletePhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  purpose: String!\n  payload: String!\n  key: String!\n  verified: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  place: Place | null;
  GetMyProfile: GetMyProfileResponse;
  user: User | null;
  verification: Verification | null;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  isFavorite: boolean;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  age: number | null;
  password: string | null;
  facebookId: string | null;
  phoneNumber: string | null;
  profilePhoto: string | null;
  verificaitons: Array<Verification> | null;
  rideAsPassenger: Array<Ride> | null;
  rideAsDriver: Array<Ride> | null;
  createdAt: string;
  updatedAt: string | null;
  fullName: string;
  messages: Array<Message> | null;
  verifiedEmail: boolean;
  verifiedPhoneNumber: boolean;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number | null;
  lastLat: number | null;
  lastDirection: number | null;
}

export interface Verification {
  id: number;
  target: string;
  purpose: string;
  payload: string;
  key: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Ride {
  id: number;
  status: string;
  pickUpAddress: string;
  pickUpLat: number;
  pickUpLng: number;
  dropOffAddress: string;
  dropOffLat: number;
  dropOffLng: number;
  price: number;
  duration: string;
  distance: string;
  driver: User;
  passenger: User;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: number;
  text: string;
  chat: Chat;
  author: User;
  createdAt: string;
  updatedAt: string | null;
}

export interface Chat {
  id: number;
  message: Array<Message> | null;
  participants: Array<User> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  CompleteEmailVerification: CompleteEmailVerificationResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
  RequestEmailVerification: RequestEmailVerificationResponse;
  StartPhoneVerification: StartPhoneVerificationResponse;
  CompletePhoneVerification: CompletePhoneVerificationResponse;
}

export interface CompleteEmailVerificationMutationArgs {
  key: string;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePhoto: string;
  age: number;
  phoneNumber: string;
}

export interface FacebookConnectMutationArgs {
  firstName: string;
  lastName: string;
  email: string;
  facebookId: string;
}

export interface StartPhoneVerificationMutationArgs {
  phoneNumber: string;
}

export interface CompletePhoneVerificationMutationArgs {
  phoneNumber: string;
  key: string;
}

export interface CompleteEmailVerificationResponse {
  ok: boolean;
  error: string | null;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface RequestEmailVerificationResponse {
  ok: boolean;
  error: string | null;
}

export interface StartPhoneVerificationResponse {
  ok: boolean;
  error: string | null;
}

export interface CompletePhoneVerificationResponse {
  ok: boolean;
  error: string | null;
}
