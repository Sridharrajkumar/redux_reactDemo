import {createStore} from 'redux'

const counterReducer = (state = { counter: 1 }, action) => {
    
    if (action.type === 'ADD')
    {
        return{
            counter: state.counter + 1
        }
    }
    else if (action.type === 'SUB')
    {
        return{
            counter: state.counter - 1
        }
    }
    else if (action.type === 'ADD5')
    {
        return {
            counter: state.counter + 5
        }
    }
    else if (action.type === 'SUB5')
    {
        return {
            counter: state.counter - 5
        }
    }
    return state;
    
}

const store = createStore(counterReducer);



export default store;