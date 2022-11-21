import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const getContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

const addContactSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactSuccessReducer = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
};

const extraActions = [getContacts, addContact, deleteContact];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addCase(getContacts.fulfilled, getContactsSuccessReducer)
      .addMatcher(getActions('fulfilled'), handleFulfilled)
      .addMatcher(getActions('rejected'), handleRejected)
      .addMatcher(getActions('pending'), handlePending),
});

export const contactsReducer = contactsSlice.reducer;
