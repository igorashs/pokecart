import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import pokeStoreReducer, { fetchPokeItems } from './pokeStoreSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    pokeStore: pokeStoreReducer,
  },
});

store.dispatch(fetchPokeItems());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
