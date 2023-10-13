import classes from './Counter.module.css';

import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  
  const IncrementHandler = () => {
    dispatch({ type: 'ADD' });
  }

  const DecrementHandler = () => {
    dispatch({ type: 'SUB' });
  }

  const IncrementHandler5 = () => {
    dispatch({ type: 'ADD5' });
  }

  const DecrementHandler5 = () => {
    dispatch({ type: 'SUB5' });
  }


  


  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={IncrementHandler5}>IncrementBy5</button>
        <button onClick={DecrementHandler5}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
