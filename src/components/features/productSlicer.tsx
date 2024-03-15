import { getProducts } from "../../api/products";
import { Product } from "../../types/Product";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



type ProductState = {
  items: Product[],
  loaded: boolean,
  hasError: string | null,
};

const productState: ProductState = {
  items: [],
  loaded: true,
  hasError: null,
};

export const productsInit = createAsyncThunk('products/fetch', () => {
  return getProducts();
})

const productsSlicer = createSlice({
  name: 'products',
  initialState: productState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(productsInit.pending, (state) => {
      return {
        ...state,
        loaded: true,
      }
    });
    builder.addCase(productsInit.fulfilled, (state, action) => {
      return {
        ...state,
        items: action.payload,
        loaded: false
      }
    });
    builder.addCase(productsInit.rejected, (state) => {
      return {
        ...state,
        loaded: false,
        hasError: 'Error'
      }
    })
  }
});

export default productsSlicer.reducer;