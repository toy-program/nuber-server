export const typeDefs = ["type Chat {\n  id: Int!\n  message: [Message]\n  participants: [User]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Message {\n  id: Int!\n  text: String!\n  chat: Chat!\n  author: User!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  address: String!\n  isFavorite: Boolean!\n}\n\ntype Query {\n  place: Place\n  user: User\n  verification: Verification\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAddress: String!\n  pickUpLat: Float!\n  pickUpLng: Float!\n  dropOffAddress: String!\n  dropOffLat: Float!\n  dropOffLng: Float!\n  price: Float!\n  duration: String!\n  distance: String!\n  driver: User!\n  passenger: User!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  FacebookConnect(firstName: String!, lastName: String!, email: String, facebookId: String!): FacebookConnectResponse!\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String\n  facebookId: String\n  phoneNumber: String\n  profilePhoto: String\n  verificaitons: [Verification]\n  rideAsPassenger: [Ride]\n  rideAsDriver: [Ride]\n  createdAt: String!\n  updatedAt: String\n  fullName: String\n  messages: [Message]\n  verifiedEmail: Boolean!\n  verifiedPhoneNumber: Boolean!\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastDirection: Float\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  user: User!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  place: Place | null;
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

export interface User {
  id: number;
  email: string | null;
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
  fullName: string | null;
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
  payload: string;
  key: string;
  used: boolean;
  user: User;
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
  EmailSignIn: EmailSignInResponse;
  FacebookConnect: FacebookConnectResponse;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface FacebookConnectMutationArgs {
  firstName: string;
  lastName: string;
  email: string | null;
  facebookId: string;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}
