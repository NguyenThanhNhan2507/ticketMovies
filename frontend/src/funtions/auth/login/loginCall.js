import { createSlice} from "@reduxjs/toolkit";

const userLogin = createSlice({
    name: 'userLogin',
    initialState:{},
    reducers:{
        getUser:(state,action)=>{
            state=action.payload
            return state
    },
    }
})
const {reducer,actions} = userLogin
export const {getUser}=actions
export default reducer;