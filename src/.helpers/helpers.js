export const handlePanding = state => {
  state.isLoading = true;
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const handleFulfilled = state => (state.isLoading = false);
