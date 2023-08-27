import { createSlice } from "@reduxjs/toolkit";




const cardSlice = createSlice({
    name:"card",
    initialState:{
        items:[],
        totalQuantity:0,
    },
    reducers:{
        addItemToCard(state , actions){
            const newItem = actions.payload;
            const existingItem = state.items.find((item)=>item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemToCard(state , actions){
            const id = actions.payload;
            const existingItem = state.items.find((item)=>item.id === id);
            state.totalQuantity --;
            console.log(existingItem.quantity,"existingItem.quantity");
            if(existingItem.quantity === 1){
                state.items= state.items.filter((item)=>item.id !== id)
            }else{
                existingItem.quantity--;
            }
        }
    }
})

export const ActionCardSlice = cardSlice.actions;
export default cardSlice;