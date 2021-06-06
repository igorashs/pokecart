import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokeItem } from 'types/types';
import { getValueWithinLimits } from 'utils';
import { RootState } from './store';

export interface CartItem {
  id: PokeItem['id'];
  name: PokeItem['name'];
  spriteURL: PokeItem['spriteURL'];
  amount: number;
  cost: number;
}

export interface CartState {
  items: CartItem[];
  count: number;
}

const initialState: CartState = {
  items: [],
  count: 0,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    cartItemAdded: (state, action: PayloadAction<PokeItem>) => {
      const newItem = action.payload;
      const item = state.items.find((i) => i.id === newItem.id);

      if (item) item.amount += 1;
      else
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          amount: 1,
          cost: newItem.cost,
          spriteURL: newItem.spriteURL,
        });

      state.count += 1;

      return state;
    },

    cartItemRemoved: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);

      if (item && item.amount > 1) item.amount -= 1;
      else state.items = state.items.filter((i) => i.id !== id);

      state.count -= 1;

      return state;
    },

    cartItemUpdatedByAmount: (
      state,
      action: PayloadAction<{ item: CartItem; amount: number }>,
    ) => {
      const { item, amount } = action.payload;
      const cartItem = state.items.find((i) => i.id === item.id);

      if (cartItem) {
        const newAmount = getValueWithinLimits(amount, 1, 100);
        const oldAmount = cartItem.amount;
        cartItem.amount = newAmount;

        state.count -= oldAmount;
        state.count += newAmount;
      }

      return state;
    },

    cartEmptied: () => {
      const state: CartState = {
        items: [],
        count: 0,
      };

      return state;
    },
  },
});

export const { cartItemAdded, cartItemRemoved, cartItemUpdatedByAmount } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartCount = (state: RootState) => state.cart.count;

export default cartSlice.reducer;
