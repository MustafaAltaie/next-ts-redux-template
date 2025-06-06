// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { CartItem } from '../../types/Cart';

// interface CartState {
//     items: CartItem[],
//     totalQuantity: number,
//     totalPrice: number
// }


// const initialState: CartState = {
//     items: [],
//     totalQuantity: 0,
//     totalPrice: 0
// }

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action: PayloadAction<CartItem>) {
//             const item = action.payload;
//             const existing = state.items.find(i => i.id === item.id);
//             if(existing) {
//                 existing.quantity += 1;
//                 state.totalPrice += item.price * item.quantity;
//             } else {
//                 state.items.push(item);
//                 state.totalPrice += item.price;
//             }
//             state.totalQuantity += 1;
//         },
//     },
// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;