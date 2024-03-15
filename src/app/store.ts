import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from '../components/features/productSlicer';
import favouriteReducer from '../components/features/favouriteSlicer';
import cartReducer from '../components/features/cartSlicer';


export const store = configureStore({
  reducer: {
    products: productReducer,
    favourite: favouriteReducer,
    cart: cartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
