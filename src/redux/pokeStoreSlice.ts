import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import pokeApi, { FetchItemsArgs, FetchItemsReturn } from 'pokeAPI';
import { PokeItem } from 'types/types';
import { RootState } from './store';

interface Options {
  offset: number;
  limit: number;
}

interface PokeStoreState {
  items: PokeItem[];
  next: Options | null;
  previous: Options | null;
}

const initialState: PokeStoreState = {
  items: [],
  previous: null,
  next: { offset: 0, limit: 3 },
};

export const fetchPokeItems = createAsyncThunk<
  FetchItemsReturn,
  FetchItemsArgs | undefined
>('cart/fetchItems', async ({ offset, limit } = {}) => {
  const { items, next, previous } = await pokeApi.fetchItems({ limit, offset });

  return { items, next, previous };
});

const pokeStoreSlice = createSlice({
  initialState,
  name: 'pokeStore',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPokeItems.fulfilled,
      (state, action: PayloadAction<FetchItemsReturn>) => {
        const newState: PokeStoreState = {
          ...action.payload,
        };

        return newState;
      },
    );
  },
});

export const selectPokeStore = (state: RootState) => state.pokeStore;
export const selectPokeStoreItems = (state: RootState) => state.pokeStore.items;
export const selectPokeStoreNext = (state: RootState) => state.pokeStore.next;
export const selectPokeStorePrevious = (state: RootState) =>
  state.pokeStore.previous;

export default pokeStoreSlice.reducer;
