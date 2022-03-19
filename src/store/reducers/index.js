import { combineReducers } from "redux";
import githubReducer from "./github_reducer";

const appReducers = combineReducers({
    user: githubReducer
})

export default appReducers;