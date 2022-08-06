import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from '../store/slices/counterSlice';

// useSelector for getting state , useDispatch to do actions
// function Counter(){

//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()
//     return(
//         <div>
//         <br />
//        <button  onClick={() => dispatch(increment())}>+</button>
//        <br />
//        <br />
//        <button label='-' onClick={() => dispatch(decrement())} >-</button>
//         <br />
//         <br />
//        <label>{count}</label>
//        </div>
//     );
// }
// export default Counter;

