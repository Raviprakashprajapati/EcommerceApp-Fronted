import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSearchValue : null,
    filterData:null
}


const searchReducer = createSlice({
    name:"search",
    initialState,
    reducers:{

        setCurrrectSearchValue : (state,action) =>{

            state.currentSearchValue = action.payload

        },

        setFilterSearchValue : (state,action) =>{
            
                state.filterData = action.payload
            
        }

    }
})


//for individual intial 
export const selectCurrentSearchValue = (state) => state.search.currentSearchValue

export const selectFilterSearchValue = (state) =>state.search.filterData


export const {setCurrrectSearchValue,setFilterSearchValue} = searchReducer.actions

export default searchReducer.reducer