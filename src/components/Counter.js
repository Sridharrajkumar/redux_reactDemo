import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showcounter = useSelector(state => state.counter.showCouter);
  
  const IncrementHandler = () => {
    dispatch(counterActions.ADD(1));
  }

  const DecrementHandler = () => {
    dispatch(counterActions.SUB(1));
  }

  const IncrementHandler5 = () => {
    dispatch(counterActions.ADD(5));
  }

  const DecrementHandler5 = () => {
    dispatch(counterActions.SUB(5));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!showcounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={IncrementHandler5}>IncrementBy3</button>
        <button onClick={DecrementHandler5}>DecrementBy3</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


