export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;

export const selectIsLoggedIn = state => state.contacts.isLoggedIn;

export const selectUser = state => state.contacts.user;

export const selectIsRefreshing = state => state.contacts.isRefreshing;
