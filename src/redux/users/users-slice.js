import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchUsers, updateUsers } from "./users-operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const extraActions = [fetchUsers, updateUsers];

export const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(updateUsers.fulfilled, (state, { payload }) => {
        const updatedIndex = state.items.findIndex(
          (item) => item.id === payload.id
        );

        if (updatedIndex !== -1) {
          state.items[updatedIndex] = payload;
        }
      })
      .addMatcher(
        isAnyOf(...extraActions.map((extraAction) => extraAction.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...extraActions.map((extraAction) => extraAction.fulfilled)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...extraActions.map((extraAction) => extraAction.rejected)),
        handleRejected
      );
  },
});

export const usersReduser = usersSlice.reducer;
