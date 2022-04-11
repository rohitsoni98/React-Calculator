import { useState } from "react";

function App() {

  const [result, setResult] = useState("");


  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="flex">
      <h1 style={{ margin: "10px 0" }}>Calculator</h1>
      <div className="calc-app">
        <input className="screen" type="text" value={result} />
        <div className="keypad">
          <button className='btn light-gray' id="clear" onClick={clear}>
            Clear
          </button>
          <button className='btn light-gray' id="backspace" onClick={backspace}>
            C
          </button>
          <button className='btn orange' name="/" onClick={handleClick}>
            /
          </button>
          <button className='btn' name="7" onClick={handleClick}>
            7
          </button>
          <button className='btn' name="8" onClick={handleClick}>
            8
          </button>
          <button className='btn' name="9" onClick={handleClick}>
            9
          </button>
          <button className='btn orange' name="*" onClick={handleClick}>
            &times;
          </button>
          <button className='btn' name="4" onClick={handleClick}>
            4
          </button>
          <button className='btn' name="5" onClick={handleClick}>
            5
          </button>
          <button className='btn' name="6" onClick={handleClick}>
            6
          </button>
          <button className='btn orange' name="-" onClick={handleClick}>
            -
          </button>
          <button className='btn' name="1" onClick={handleClick}>
            1
          </button>
          <button className='btn' name="2" onClick={handleClick}>
            2
          </button>
          <button className='btn' name="3" onClick={handleClick}>
            3
          </button>
          <button className='btn orange' name="+" onClick={handleClick}>
            +
          </button>
          <button className='btn' name="0" onClick={handleClick}>
            0
          </button>
          <button className='btn' name="." onClick={handleClick}>
            .
          </button>
          <button className='btn orange' id="result" onClick={calculate}>
            Result
          </button>
        </div>
      </div>
    </div>

  );
}

export default App;