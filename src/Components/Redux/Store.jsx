import { legacy_createStore } from "redux";
import { Reducer } from "./Reducer";
const mystore = legacy_createStore(Reducer)

export default mystore