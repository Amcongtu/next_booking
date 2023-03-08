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
        getuserLogout: state=>{
            localStorage.removeItem('root')
            return {
                ...state,
                user: null,
            }
        }
    }
})

export const {getUserFailure,getUserResquest,getUserSuccess} = userSlice.actions
export const userSelect = state=>state.persistedReducer.userReducer
export default userSlice.reducer