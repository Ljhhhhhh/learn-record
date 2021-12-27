import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from './types';

export type TMainPageState = IUserInfo;

export const REDUCER_NAME = 'userInfoReducer';

export const userInfoReducer = createSlice({
  name: REDUCER_NAME,
  initialState: { userInfo: { mail: 'lujh@dzg.com' } as TMainPageState | TMainPageState },
  reducers: {
    setUserInfo(state, action: PayloadAction<TMainPageState>) {
      state.userInfo = action.payload;
    },
  },
});

export const userInfoReducerActions = userInfoReducer.actions;

export default userInfoReducer.reducer;
