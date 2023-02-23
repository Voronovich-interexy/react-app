import { booleanSlice } from './booleans.slice';

export const {
  setClearCharFieldTrue,
  setClearCharFieldFalse,
  toggleMobileOpen,
  startAnimation,
  showEpisodes,
  hideEpisodes,
  openSearchInput,
  closeSearchInput,
} = booleanSlice.actions;
