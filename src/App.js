import logo from "./logo.svg";
import "./App.css";
import { increment, decrement } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const islogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {console.log(counter, "counter")}
      <h1> Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <br />
      {islogged ? <>logged user</> : <>anoyomus</>}
    </div>
  );
}

export default App;
