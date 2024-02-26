import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../components/slices/userDataSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;