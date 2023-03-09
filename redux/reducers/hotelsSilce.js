import { createSlice } from "@reduxjs/toolkit";
const initstate = {
    loading: false,
    hotels: null,
    error: false,
}

const hoteslSlice = createSlice({
    name: 'hotels',
    initialState: initstate,
    reducers: {
        gethotelsrequest: state =>{
            return {
                ...state,
                loading: true,
            }
        },
        gethotelssuccess: (state,action)=>{
            return {
                ...state,
                hotels: action.payload,
                loading: false,
            }
        },
        gethotelsfailure: state=>{
            return {
                ...state,
                error: true,
            }
        }
    }
})

export const {gethotelsfailure,gethotelsrequest,gethotelssuccess} = hoteslSlice.actions
export const hotelsselect = state =>state.persistedReducer.hotelsreducer
export default hoteslSlice.reducer