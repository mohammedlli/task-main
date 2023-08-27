import {configureStore} from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cardSlice from "./card-slice";

const store = configureStore({
    reducer:{ui:uiSlice.reducer,card:cardSlice.reducer},
})
console.log(uiSlice.reducer,"uiSlice.reducer");
export default store ;