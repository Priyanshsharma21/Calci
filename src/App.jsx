import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { FaDivide } from 'react-icons/fa';

const App = () => {
  const [calculationRes, setCalculationRes] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  const handleAddition = () => {
    const addition = parseFloat(numberOne) + parseFloat(numberTwo);
    setCalculationRes(addition);
  };

  const handleSubtraction = () => {
    const sub = parseFloat(numberOne) - parseFloat(numberTwo);
    setCalculationRes(sub);
  };

  const handleMultiply = () => {
    const multi = parseFloat(numberOne) * parseFloat(numberTwo);
    setCalculationRes(multi);
  };

  const handleDivide = () => {
    const divide = parseFloat(numberOne) / parseFloat(numberTwo);
    const sliceDiv = divide.toString().slice(0, 4);
    const res = parseFloat(sliceDiv);
    setCalculationRes(res);
  };

  const handleClear = () => {
    setCalculationRes(0);
    setNumberOne(0);
    setNumberTwo(0);
  };

  return (
    <div className="app">
      <div className="calculator_box">
        <div className="show_res_box">{calculationRes}</div>

        <div className="inputs">
          <input
            type="number"
            onChange={(e) => setNumberOne(e.target.value)}
            value={numberOne}
            className="main_inp"
            placeholder="21"
          />
          <input
            type="number"
            onChange={(e) => setNumberTwo(e.target.value)}
            value={numberTwo}
            className="main_inp"
            placeholder="42"
          />
        </div>

        <div className="calculator_btns">
          <div className="addsub">
            <div className="add btns_main" onClick={handleAddition}>
              <AiOutlinePlus className="icons" />
            </div>
            <div className="subs btns_main" onClick={handleSubtraction}>
              <AiOutlineMinus className="icons" />
            </div>
          </div>
          <div className="multidiv">
            <div className="multi btns_main" onClick={handleMultiply}>
              <ImCross className="icons" />
            </div>

            <div className="divison btns_main" onClick={handleDivide}>
              <FaDivide className="icons" />
            </div>
          </div>

          <div className="clear_hai" onClick={handleClear}>
            Clear
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
