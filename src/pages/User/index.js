import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";

import UserCard from "../../components/UserCard";
import { fetchUser } from "../../redux/user/actions";
import {CLEAR_STORE_POSTS_USER, CLEAR_STORE_USER} from "../../redux/user/actionsType";
import UserPostsTable from "../../components/UserPostsTable";
import BackButton from "../../components/BackButton";

const User = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(params));
        return () => {
            dispatch({ type: CLEAR_STORE_USER });
            dispatch({ type: CLEAR_STORE_POSTS_USER })
        }
    }, []);

    const userDetails = useSelector(state => state.userReducer.userDetails);
    const userPosts = useSelector(state => state.userReducer.userPosts);

    return (
            <>
                <BackButton/>
                {
                    Object.keys(userDetails).length > 0 &&
                    <UserCard userDetails={userDetails}/>
                }
                {
                    userPosts && userPosts.length > 0 &&
                    <UserPostsTable userPosts={userPosts}/>
                }
            </>
    )
};

export default User;