import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice.slice";
import schedulingSlice from "./modules/Scheduling/scheduling.slice";

export const store = configureStore({
  reducer: {
    globalSlice,
    schedulingSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
