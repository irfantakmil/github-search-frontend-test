import React,{useState} from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestions, getUserRepos } from "../../store/actions/github_actions";
import { Autocomplete } from "@mui/material";
import Repositories from "../repositories";

const SearchUser = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');

    const repositories = user.repositories;

    const triggerSearch = (e) => {
        e.preventDefault();
        dispatch(getSuggestions(e.target.value));
       //console.log(e.target.value)
    }


    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     setUserName(e.target.value);
    //     dispatch(searchUser(userName));
    // }
    
    return(
        <>
            <div className="search-bar">
                <form id="form">
                    <Autocomplete
                        freeSolo
                        id="auto-complete-search"
                        disableClearable
                        options={user.userNameSuggestions.map((item) => item.login)}
                        value={userName}
                        onChange={(_event, selectedUser) => {
                            setUserName(selectedUser);
                            dispatch(getUserRepos(selectedUser));
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search github username"
                                type="search"
                                variant="outlined"
                                name="searchBar"
                                style={{width:'50%',margin:'30px 100px'}}
                                onChange={triggerSearch}
                            />
                        )}
                    />
                    {/* <TextField
                        type="text"
                        variant="outlined"
                        name="searchBar"
                        placeholder="Search Users"
                        style={{width:'50%',margin:'50px 100px'}}
                        onChange={triggerSearch}
                    /> */}
                </form>
                <Repositories
                    repos={repositories}
                    name={userName}
                />
            </div>
        </>
    )
}

export default SearchUser;