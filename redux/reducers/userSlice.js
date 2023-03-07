import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: null,
    error: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserResquest: state=>{
            return {
                ...state,
                loading: true,
            }
        },
        getUserSuccess: (state,action)=>{
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        },
        getUserFailure: (state)=>{
            return {
                ...state,
                error: true,
            }
        },
    }
})

export const {getUserFailure,getUserResquest,getUserSuccess} = userSlice.actions
export const userSelect = state=>state
export default userSlice.reducer