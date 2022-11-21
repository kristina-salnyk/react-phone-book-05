export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
  const normalizedFilter = state.filter.toLowerCase();

  return state.contacts.items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};
