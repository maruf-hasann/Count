import { useState } from 'react'
import { BiReset } from "react-icons/bi";
import Header from './Components/Header';


function App() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState(null)
  const [valueStart, setValueStart] = useState(true);
  const [nameValue,setNameValue] = useState(true)
  const setNumber = (event) => {
    event.preventDefault()
    const num = event.target.number.value;
    setCount(num)
   
  }
  const nameSet = (event) => {
       event.preventDefault();
       const name = event.target.name.value;
       setName(name);
  }
const decrement = () => {
  if (count === 0) {
    return;
  }
  setCount(count - 1);
};
  return (
    <div className="container">
      <Header/>
      <div className="counter">
        <h1>{name || "Tally Counter"}</h1>
        <div className="">
          <h1 className="display">{count}</h1>
          <div>
            <div className="main">
              <button
                className="plus"
                onClick={() => setCount((count) => count + 1)}
              >
                +
              </button>
              <button className="minus" onClick={decrement}>
                -
              </button>
            </div>
            <div className='other'>
              <button className="reset" onClick={() => setCount(0)}>
                <BiReset />
                Reset Counter
              </button>{" "}
              <br />
              {valueStart ? (
                <button
                  className="numValue"
                  onClick={() => setValueStart(false)}
                >
                  Start Value
                </button>
              ) : (
                <form onSubmit={setNumber}>
                  <input type="number" name="number" className="input" />
                  <input type="submit" value="SET" className="set" />
                </form>
              )}{" "}
              <br />
              {nameValue ? (
                <button
                  className="numValue"
                  onClick={() => setNameValue(false)}
                >
                  Counter Name
                </button>
              ) : (
                <form onSubmit={nameSet}>
                  <input type="text" name="name" className="input" />
                  <input type="submit" className="set" value="SET" />
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
