import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store';

export interface ICard {
  id: string;
  name: string;
}

const cardsAdapter = createEntityAdapter<ICard>({
  selectId: (card) => card.id,
});

const cardSlice = createSlice({
  name: 'card',
  initialState: cardsAdapter.getInitialState({
    items: [],
  }),
  reducers: {
    setCards(state, action) {
      cardsAdapter.setAll(state, action.payload);
    },
    addNewCard(state, action) {
      cardsAdapter.addOne(state, action.payload);
    },
    deleteCard(state, action) {
      cardsAdapter.removeOne(state, action.payload);
    },
  },
});

// Actions
export const { setCards, addNewCard, deleteCard } = cardSlice.actions;

// Selectors
export const { selectAll: selectCards } = cardsAdapter.getSelectors<RootState>(
  (state) => state.card,
);

export default cardSlice.reducer;
