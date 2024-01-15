import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser:null,
    isLoading:true,
    error:false
}

export const fetchUser = createAsyncThunk()

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

        setCurrentUser:(state,action)=>{
            //here
            state.currentUser = action.payload

        }

    }
})


export const selectCurrentUser = (state) =>state.user.currentUser

export const {setCurrentUser} = userSlice.actions

export default userSlice.reducer