import { combineReducers } from "redux";
import documents from "./documentReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({ documents, apiCallsInProgress });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
