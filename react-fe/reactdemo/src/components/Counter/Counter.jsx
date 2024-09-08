import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/counterReducer';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </>
  );
};

export default Counter;
