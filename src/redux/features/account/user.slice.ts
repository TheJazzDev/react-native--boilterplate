import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '~/redux/store';
import { useSelector } from 'react-redux';

export interface UserState {
  loading: boolean;
  userDetails: {
    role: string;
    email: string;
    userId: string;
    active: string;
    adminId: number;
    userName: string;
    loggedIn: number;
    lastName: string;
    createdAt: string;
    firstName: string;
    mobileNumber: string;
    profileImage: string;
    isAuthenticated: boolean;
  };
}

const initialState: UserState = {
  loading: false,
  userDetails: {
    role: '',
    email: '',
    userId: '',
    active: '',
    adminId: 0,
    loggedIn: 0,
    userName: '',
    lastName: '',
    createdAt: '',
    firstName: '',
    mobileNumber: '',
    profileImage: '',
    isAuthenticated: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUserDetails: (
      state,
      action: PayloadAction<Partial<UserState['userDetails']>>
    ) => {
      state.userDetails = { ...state.userDetails, ...action.payload };
    },
  },
});

export function useUserSlice() {
  const state = useSelector(({ user }: RootState) => user);
  return {...state, ...userSlice.actions };
}

export default userSlice.reducer;
