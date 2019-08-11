export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHello(name: String!): SayHelloResponse!\n  user: User\n}\n\ntype SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype User {\n  id: Int!\n  email: String\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String\n  phoneNumber: String\n  profilePhoto: String\n  createdAt: String!\n  updatedAt: String\n  fullName: String\n  verifiedEmail: Boolean!\n  verifiedPhoneNumber: Boolean!\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastDirection: Float\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: SayHelloResponse;
  user: User | null;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}

export interface User {
  id: number;
  email: string | null;
  firstName: string;
  lastName: string;
  age: number | null;
  password: string | null;
  phoneNumber: string | null;
  profilePhoto: string | null;
  createdAt: string;
  updatedAt: string | null;
  fullName: string | null;
  verifiedEmail: boolean;
  verifiedPhoneNumber: boolean;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number | null;
  lastLat: number | null;
  lastDirection: number | null;
}
