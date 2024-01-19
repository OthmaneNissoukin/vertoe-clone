import { createStore } from "redux";

import { locationReducer } from "./slices/locationSlice";

const store = createStore(locationReducer);

export default store;
