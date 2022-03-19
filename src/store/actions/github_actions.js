import axios from "axios";
import * as github from "./index";

const token = "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";

export const getSuggestions = (userName) => {
    return async(dispatch)=>{
        try{
            const response = await axios.get(`https://api.github.com/search/users?q=${userName}&per_page=5`);
            const results = response.data.items;
            dispatch(github.getSuggestions(results));
        } catch(err){
            console.log(err);
        }
    }
}

export const getUserRepos = (userRepos) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${userRepos}/repos`,{
                headers: {
                    'Authorization': `token ${token}`
                }
            });
            const results = response.data;
            console.log(response);
            dispatch(github.getUserRepos(results));
        } catch(err){
            console.log(err);
        }
    }
}

