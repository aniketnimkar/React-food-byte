import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
//added
// const rootReducer = combineReducers({
//   cart: cartSlice,
// });
// export const store = confirmStore({
//   reducer: rootReducer,
// });
