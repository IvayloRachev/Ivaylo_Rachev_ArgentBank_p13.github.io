import { conmbineReducers } from "redux";
import loggedReducer from "./isLogged";
import getUserReducer from "./getUser";

export const allReducers = conmbineReducers({
    loggedReducer,
    getUserReducer,
});