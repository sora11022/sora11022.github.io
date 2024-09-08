// //step 1: Khoi tao gia tri ban dau

// import { useReducer } from "react";

// const initialState = {
//   count: 0,
// };

// // step 2: Dinh nghia reducer

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };
//     default:
//       throw new Error();
//   }
// }

// // Step 3: Su dung reducer

// function CounterReducer() {
//   // Su dung useReducer
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: "increment" })}>+1</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// }

// export default CounterReducer;
