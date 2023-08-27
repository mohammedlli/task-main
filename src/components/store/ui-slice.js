import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:"ui",
    initialState:{mohammed:true,ali:false},
    reducers:{
        toggle(state){
            state.mohammed = !state.mohammed
        }
    }
});
console.log(uiSlice.reducer);
export const uiActions = uiSlice.actions;

export default uiSlice;