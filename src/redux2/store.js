import { legacy_createStore } from "redux";
import { reduce } from "./reduce";

const initialState={
    counter:0
}
export const store=legacy_createStore(reduce,initialState)