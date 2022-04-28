import {createSlice} from '@reduxjs/toolkit'


const emailPage = createSlice({
    name:'emailPage',
    initialState:"",
    reducers:{
        emailGet:(state,action)=>{
            state=action.payload
            return state
    },
    }
})
const {reducer,actions} = emailPage
export const {emailGet}=actions
export default reducer;