import { configureStore } from '@reduxjs/toolkit';

// import 해온 것은 slice.reducer 입니다.
import signupReducer from './signupSlice';

const store = configureStore({
  reducer: {
    // module 추가
    signupData: signupReducer,
  },
});

export default store;
