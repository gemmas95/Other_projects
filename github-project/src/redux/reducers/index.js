import { combineReducers } from "redux";
import contributors from "./contributorsReducer";
import apiCallsInProgress from "./commonReducers";

const rootReducer = combineReducers({ contributors, apiCallsInProgress });

export default rootReducer;
