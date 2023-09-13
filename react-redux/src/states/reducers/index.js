import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
    name: 'incdec',
    initialState: 10,
    reducers: {
        Inc: (state, action) => {
            return state += action.payload;
        },
        Dec: (state, action) => {
            return state -= action.payload;
        }
    }
})

export const{Inc, Dec} = incdecSlice.actions;
export default incdecSlice.reducer;