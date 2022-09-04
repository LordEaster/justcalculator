import React, { useEffect, useState } from "react";

import "../../css/styles.scss"
import "../../css/calc/basic.scss";

export default function CalcBasic() {
    useEffect(() => {
        document.title = "Basic Calculator | Math tools";

        // document.addEventListener("keyup", detectKeyDown);
    });

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    // const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/'];
    // const keysplus = ['Enter', 'Backspace', 'Delete', 'Escape'];
    const ops = ['/', '*', '-', '+', '.'];

    // const detectKeyDown = (event) => {

    //     console.log(event.key);
    //     event.preventDefault();
    //     if (!keys.includes(event.key) && !keysplus.includes(event.key)) {
    //         return;
    //     } 
    //     if (keys.includes(event.key)) {
    //         updateCalc(event.key);
    //     }
    //     else if (event.key === "Enter") {
    //         calculate();
    //     } else if (event.key === "Escape") {
    //         clear();
    //     } else if (event.key === "Backspace") {
    //         deleteLast();
    //     } else if (event.key === "Delete") {
    //         clear();
    //     } else  {
    //         return;
    //     }

    // }

    const updateCalc = (value) => {

        if (calc === '' && value === '.') {
            setCalc('0.');
        }

        if (ops.includes(value) && ops.includes(calc.slice(-1))) {
            setCalc(calc.slice(0, -1) + value);
        }
        
        if (calc === '' && value === '-') {
            setCalc(calc + value);
        } else if (ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))) {
            return;
        }
                
        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if (calc === '') {
            return;
        }

        const value = calc.slice(0, -1);

        setCalc(value);
    }

    const clear = () => {
        setCalc('');
        setResult("0");
    }





    return (
        <div className="page-content">
        <div className="calculator">
            <div className="display">
                {result ? <span>({result})</span> : '' }&nbsp; { calc || "0" }
            </div>

            <div className="digits">
                <button className="free" disabled></button>
                <button id="clear" className="ops" onClick={clear}>AC</button>
                <button className="ops" onClick={deleteLast}><span class="material-symbols-rounded">backspace</span></button>
                <button className="ops" onClick={() => updateCalc('/')}>÷</button>

                <button onClick={() => updateCalc('7')}>7</button>
                <button onClick={() => updateCalc('8')}>8</button>
                <button onClick={() => updateCalc('9')}>9</button>
                <button className="ops" onClick={() => updateCalc('*')}>×</button>


                <button onClick={() => updateCalc('4')}>4</button>
                <button onClick={() => updateCalc('5')}>5</button>
                <button onClick={() => updateCalc('6')}>6</button>
                <button className="ops" onClick={() => updateCalc('-')}>-</button>


                <button onClick={() => updateCalc('1')}>1</button>
                <button onClick={() => updateCalc('2')}>2</button>
                <button onClick={() => updateCalc('3')}>3</button>
                <button className="ops" onClick={() => updateCalc('+')}>+</button>

                <button onClick={() => updateCalc('0')}>0</button>
                <button onClick={() => updateCalc('.')}>.</button>
                <button className="ops equal" onClick={calculate}>=</button>
            </div>
        </div>
        </div>
    );
}
