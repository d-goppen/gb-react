import { createStore } from "redux";
import profileReducer from "./profile/reducer";

const store = createStore(profileReducer);

export default store;