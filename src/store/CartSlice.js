import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     cart: []
// }


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            // state.cart.push(action.payload)
            // console.log(action.payload)


            const item_index = state.findIndex(
                (item) => item.id === action.payload.id)
            if (item_index >= 0) {
                alert("The Product is  Already In A Card")
            } else {

                const tempProduct = {
                    ...action.payload, cartQuantity: 1
                }
                state.push(tempProduct)
            }

        },
        remove(state, action) {

            let data = state.filter(item => item.id !== action.payload)
            // console.log(data)
            return data


        },
        increment(state, action) {
            const item_index = state.findIndex(
                (item) => item.id === action.payload)
            state[item_index].cartQuantity += 1

        },
        decrement(state, action) {
            const item_index = state.findIndex(
                (item) => item.id === action.payload)
            if (state[item_index].cartQuantity > 0) {
                state[item_index].cartQuantity -= 1

            }
        }
    }
})

export const { addToCart, remove, increment, decrement } = cartSlice.actions
export default cartSlice.reducer