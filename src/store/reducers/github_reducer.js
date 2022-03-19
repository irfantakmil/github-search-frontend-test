import { GET_USER_REPOS, GET_SUGGESTIONS } from "../types";

const initialState = {
    userNameSuggestions: [],
    repositories: [],
    reposLanguages: []
}

export default function githubReducer(state=initialState, action){
    switch(action.type){
        case GET_SUGGESTIONS:
            return {...state, userNameSuggestions: action.payload}
        case GET_USER_REPOS:
            return {...state, repositories: action.payload}
        default:
            return state
    }
}