import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        itemsList : [],
        totalQuantity:0,
    },
    reducers : {
        addToCart(state,action){
            const newItem = action.payload

            //Check item is already exits
            // const itemIndex = state.itemsList.findIndex(item => item.id === newItem.id)
            // if(itemIndex!== -1){
            //     state.itemsList[itemIndex].quantity++
            // }else{
            //     state.itemsList.push(newItem)
            // }
            // state.totalQuantity++  
            
            const existItem = state.itemsList.find(item => item.name === newItem.name)
            if(existItem){
                existItem.quantity++
                existItem.totalPrice += newItem.price
            }else{
                state.itemsList.push({
                    name:newItem.name,
                    price:newItem.price,
                    quantity:1,
                    totalPrice: newItem.price,
                })
            }
            state.totalQuantity+=1;
        },
        removeFromCart(state, action) {
            const name = action.payload
            const exitstingItem = state.itemsList.find((item) => item.name === name)
            if (exitstingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter((item) => item.name !== name)
            } else {
                exitstingItem.quantity--
                exitstingItem.totalPrice -= exitstingItem.price
            }
            state.totalQuantity--;

        },
        DeleteFromCart(state, action) {
            const name = action.payload
            const currItem = state.itemsList.find((item) => item.name === name)
            state.itemsList = state.itemsList.filter((item) => item.name !== name)
            state.totalQuantity -=currItem.quantity;
        },
        EmptyCart(state){
            state.itemsList =[];
            state.totalQuantity = 0;
        },
    },
})
export const cartActions = cartSlice.actions;
export default cartSlice ;