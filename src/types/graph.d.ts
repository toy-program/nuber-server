export const typeDefs = ["type Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  address: String!\n  isFavorite: Boolean!\n}\n\ntype Query {\n  place: Place\n  user: User\n  verification: Verification\n}\n\ntype User {\n  id: Int!\n  email: String\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String\n  phoneNumber: String\n  profilePhoto: String\n  createdAt: String!\n  updatedAt: String\n  fullName: String\n  verifiedEmail: Boolean!\n  verifiedPhoneNumber: Boolean!\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastDirection: Float\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
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

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  createdAt: string;
  updatedAt: string;
}
