import { createSlice } from "@reduxjs/toolkit";

var initalCounter = 0;
if (JSON.parse(localStorage.getItem('cart')) !== null) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    initalCounter = cart.reduce((total,{quantity}) => total = total + quantity,0);
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initalCounter,
    reducers:{
        increase(state,action){
            return state + 1;
        },
        decrease(state,action){
            return state - 1;
        },
        update(state,action){
            return  Number(action.payload);
        },
        increaseMany(state,action){
            return state +  Number(action.payload);
        }
    },
});

const {actions, reducer} = counterSlice;
export const {increase, decrease, update,increaseMany } = actions;
export default reducer;