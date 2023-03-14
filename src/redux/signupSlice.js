import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  signup: [],
};

// action 생성하는 부분이 사라지고 아래 부분에서
// 액션value, 액션함수, 리듀서가 합쳐짐
const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    emailData: (state, action) => {
      console.log('state', current(state));
      console.log('action', action.payload);
      state.signup = [...state.signup, action.payload];
    },
    usernamData: (state, action) => {
      console.log('state', current(state));
      console.log('action', action.payload);
      state.signup = [...state.signup, action.payload];
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const { signupData, emailData, usernamData } = signupSlice.actions;
export default signupSlice.reducer;
