import { createStoreHook } from "react-redux";
import counterReducer from "./CounterReducer";

const store = createStoreHook(counterReducer)

export default store