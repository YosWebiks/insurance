import { configureStore } from "@reduxjs/toolkit";
import { claimsSlice, policiesSlice, treasureSlice } from "./slices";

export default configureStore({
  reducer: {
    treasure: treasureSlice.reducer,
    claims: claimsSlice.reducer,
    policies: policiesSlice.reducer,
  },
});

export const {
  addNewClaim,
  addNewPolicy,
  approveClaim,
  deletePolicy,
  updatePolicy,
} = {
  ...treasureSlice.actions,
  ...claimsSlice.actions,
  ...policiesSlice.actions,
};
