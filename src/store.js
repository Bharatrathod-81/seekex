import { configureStore } from "@reduxjs/toolkit";
import { usersListReducer } from "./slice";


export const store = configureStore({
    reducer: {
        usersList:usersListReducer
    },
})