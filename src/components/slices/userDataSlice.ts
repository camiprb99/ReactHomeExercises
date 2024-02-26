import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { User } from "../../pages/types";


export const fetchUser = createAsyncThunk('user/fetchUser', async (numberOfUser: string, { rejectWithValue }) => {
    try {

        const response = await fetch(`https://randomuser.me/api?results=${numberOfUser}`);
        const data = await response.json();
        return data;

    }
    catch (error: any) {
        rejectWithValue(error.message)
    }

});
interface RTKResponse {
    data: User[];
    error: any;
    pending: number;
}
const usersInitialState: RTKResponse = { data: [], error: null, pending: 0 };

const userDataSlice = createSlice({
    name: 'user',
    initialState: usersInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.pending = 1;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.pending = 0;
                console.log(action.payload);
                state.data = action.payload.results;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.pending = 0;
                state.error = action.error.message;
            });
    },
});

export default userDataSlice.reducer;
