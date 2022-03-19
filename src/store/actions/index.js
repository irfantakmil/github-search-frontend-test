import { GET_USER_REPOS, GET_SUGGESTIONS } from "../types";

export const getSuggestions = (suggestions) => ({
    type: GET_SUGGESTIONS,
    payload: suggestions
})

export const getUserRepos = (username) => ({
    type: GET_USER_REPOS,
    payload: username
})
