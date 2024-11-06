import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Claim, GenericPayload, Policy } from "../types/redux";
import { v4 } from "uuid";
import { initialClaim, initialPolicy } from "./initials";

export const treasureSlice = createSlice({
  name: "treasure",
  initialState: 7500,
  reducers: {
    addNewPolicy: (state: number, action: PayloadAction<GenericPayload>) => {
      console.log("Here hopfully", action.payload)
      state += action.payload.price!;
      return state
    },
    deletePolicy: (state: number, action: PayloadAction<GenericPayload>) => {
      state -= action.payload.amount!;
    },
    updatePolicy: (state: number, action: PayloadAction<GenericPayload>) => {
      state += action.payload.amount!;
    },
    approveClaim: (state: number, action: PayloadAction<GenericPayload>) => {
      state -= action.payload.amount!;
    },
  },
});

export const claimsSlice = createSlice({
  name: "claims",
  initialState: [initialClaim],
  reducers: {
    addNewClaim: (state: Claim[], action: PayloadAction<GenericPayload>) => {
      state.push({
        ...action.payload,
        id: v4(),
        created_at:  Date.now(),
        approved: false,
      } as Claim);
    },
    approveClaim: (state: Claim[], action: PayloadAction<GenericPayload>) => {
      let claim = state.find((claim) => claim.id === action.payload.id!);
      if (claim) {
        claim.approved = true;
      }
    },
  },
});

export const policiesSlice = createSlice({
  name: "policies",
  initialState: [initialPolicy],
  reducers: {
    addNewPolicy: (state: Policy[], action: PayloadAction<GenericPayload>) => {
      state.push({
        ...action.payload,
        id: v4(),
        created_at: Date.now()
      } as Policy);
    },
    deletePolicy: (state: Policy[], action: PayloadAction<GenericPayload>) => {
      state = state.filter((policy) => policy.id !== action.payload.id!);
    },
    updatePolicy: (state: Policy[], action: PayloadAction<GenericPayload>) => {
      let policy = state.find((policy) => policy.id === action.payload.id!);
      if (policy) {
        policy.price = action.payload.price!;
      }
    },
  },
});
