import { combineReducers } from "redux";
import contributors from "./contributorsReducer";

const rootReducer = combineReducers({ contributors });

export default rootReducer;
