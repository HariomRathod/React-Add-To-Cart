import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSuccess: false,
    isLoading: false,
    isError: false,
    products: []
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {



    },
    // api pay data jaye ga to extraReducers ka use kare gay 

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, actions) => {
                state.isLoading = true
            })
            .addCase(fetchProducts.fulfilled, (state, actions) => {
                state.isLoading = false
                state.isSuccess = true
                state.products = actions.payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.isLoading = false
                state.isError = true
                state.products = []
            })

    }

})

// THUNKS

export const fetchProducts = createAsyncThunk('fetch/products', async () => {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = response.json()
    return data

})

export default productSlice.reducer