import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          category: newItem.category,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      
      state.totalQuantity += 1;
      state.totalAmount += newItem.price;
    },
    
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        if (type === 'increment') {
          existingItem.quantity += 1;
          existingItem.totalPrice += existingItem.price;
          state.totalQuantity += 1;
          state.totalAmount += existingItem.price;
        } else if (type === 'decrement' && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
          state.totalQuantity -= 1;
          state.totalAmount -= existingItem.price;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer; 