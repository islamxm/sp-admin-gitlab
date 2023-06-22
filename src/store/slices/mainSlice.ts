import { createSlice } from "@reduxjs/toolkit"
import initState from "../initState"

const mainSlice = createSlice({
    name: 'main',
    initialState: initState,
    reducers: {
        main_tokenSet: (state, action) => {state.token = action.payload},
        main_tokenDelete: (state) => {state.token = null},
        main_sidebarClose: (state) => {state.sidebarState = true},
        main_sidebarOpen: (state) => {state.sidebarState = false},
        
        main_updateUserData: (state,action) => {state.userData = action.payload}
    }
})

const {actions, reducer} = mainSlice

export default reducer;

export const {
    main_tokenSet,
    main_tokenDelete,
    main_sidebarClose,
    main_sidebarOpen,
    main_updateUserData
} = actions
