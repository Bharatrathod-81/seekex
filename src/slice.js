import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    showForm:false,
    usersList:[]
}

export const getUsersList = createAsyncThunk(
    "user/getUsersList",
    async () => {
        try{
            const {data} = await axios.get("https://api-generator.retool.com/RPbYKZ/data")
            return data
        }catch(err){
            console.log(err);
        }
    }  
);

export const postUser = createAsyncThunk(
    "user/postUser",
    async (payload) => {
        try{
            const {data} = await axios.post("https://api-generator.retool.com/RPbYKZ/data",payload);
            return data
        }catch(err){
            console.log(err);
        }
    }  
);
export const editUser = createAsyncThunk(
    "user/editUser",
    async (payload) => {
        try{
            const {data} = await axios.put(`https://api-generator.retool.com/RPbYKZ/data/${payload.id}`,payload);
            return data
        }catch(err){
            console.log(err);
        }
    }  
);

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,{payload}) => {
            state.usersList.push(payload);
        },

        EditUser:(state,{payload}) => {
            const newState = state?.usersList?.map(e => e.id === payload.id ? {...e,...payload}:e);
            state.usersList = newState;
        },

        setShowForm:(state,{payload}) => {
            state.showForm = payload;
        }
    },

    extraReducers:{
        [getUsersList.pending] : (state) => {
            state.loading = true;
        },

        [getUsersList.fulfilled] : (state, { payload }) => {
            state.loading = false;
            state.usersList = payload;
        },

        [getUsersList.rejected] : (state) => {
            state.loading = false;
        }
    }
});

export const {addUser,EditUser, setShowForm} = userSlice.actions;

export const usersListReducer = userSlice.reducer;