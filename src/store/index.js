
import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialCounterState = {
    counter: 1,
    showCouter: true
}

const initialAuthState = {
    isLogged: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        ADD(state, action) {
            state.counter = state.counter + action.payload
        },
        SUB(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showCouter = !state.showCouter
        }
    }

});

const Authslice = createSlice({
    name: 'Auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isLogged = true;
        },
        logOut(state) {
            state.isLogged = false;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth:Authslice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const AuthActions = Authslice.actions;

export default store;