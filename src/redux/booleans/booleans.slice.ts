import { createSlice } from '@reduxjs/toolkit';
import { BooleanSliceState } from '../../types/types';

const initialState: BooleanSliceState = {
  animationStarted: false,
  clearCharField: true,
  mobileOpen: false,
  clickedShowEpisodes: false,
  searchInputOpened: true,
};

export const booleanSlice = createSlice({
  name: 'booleans',
  initialState,
  reducers: {
    setClearCharFieldTrue(state) {
      state.clearCharField = true;
    },
    setClearCharFieldFalse(state) {
      state.clearCharField = false;
    },
    toggleMobileOpen(state) {
      state.mobileOpen = !state.mobileOpen;
    },
    startAnimation(state) {
      state.animationStarted = true;
    },
    showEpisodes(state) {
      state.clickedShowEpisodes = true;
    },
    hideEpisodes(state) {
      state.clickedShowEpisodes = false;
    },
    openSearchInput(state) {
      state.searchInputOpened = true;
    },
    closeSearchInput(state) {
      state.searchInputOpened = false;
    },
  },
});

export default booleanSlice.reducer;
