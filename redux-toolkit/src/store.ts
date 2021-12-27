import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './layouts/store';

const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    users: userInfoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type TRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type TStore = typeof store;
export default store;
