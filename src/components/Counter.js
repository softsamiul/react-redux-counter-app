import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { decreaseAction, increaseAction, resetAction } from '../services/actions/counterActions';

const Counter = () => {
    const count = useSelector((state)=> state.count);
    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(increaseAction())
    }

    const handleDecrease = () => {
        dispatch(decreaseAction())
    }

    const handleReset = () => {
        dispatch(resetAction())
    }

    return (
        <div>
            <h2>React-Redux Counter App</h2>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Counter;