import 'base-conversion'
import React, { useState, useEffect } from 'react';

import '../../css/styles.scss';
import '../../css/conv/base.scss';

export default function ConvBase() {

    useEffect(() => {
        document.title = "Base Conversion | JustMaths";
    }, []);

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [base, setBase] = useState(2);
    const [base2, setBase2] = useState(2);

    const converttodecimal = (number, base) => {
        const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        number = number.toUpperCase();
        let val = 0;
        for (let i = 0; i < number.length; i++) {
            val *= base;
            val += digits.indexOf(number[i]);
        }
        return val;
    }
    
    const converttobase = (number, base) => {
        const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let val = '';
        while (number > 0) {
            val = digits[number % base] + val;
            number = Math.floor(number / base);
        }
        return val;
    }

    const make_option = () => {
        let options = [];
        for (let i = 2; i <= 36; i++) {
            options.push(<option value={i}>{i}</option>);
        }
        return options;
    }
    return (
        <div className="content conv-base" id='content'>
            <div className="col-12">
                <h1 className="text-center">Base Converter</h1>
                <p className="text-center">Convert number from one base to another.</p>

                <form className="form-inline justify-content-center">
                    <div className="item">
                        <label htmlFor="input1">Enter number</label>
                        <input type="text" className="form-control" id="input1" placeholder="number" onChange={(e) => setInput(e.target.value)} />

                        <label htmlFor="base1">From Base</label>
                        <select className="form-control" id="base1" onChange={(e) => setBase(e.target.value)}>
                            {make_option()}
                        </select>

                        <label htmlFor="base2">To Base</label>
                        <select className="form-control" id="base2" onChange={(e) => setBase2(e.target.value)}>
                            {make_option()}
                        </select>

                        <button type="submit" className="btn btn-success btn-submit" onClick={(e) => {
                            e.preventDefault();
                            setResult(converttobase(converttodecimal(input, base), base2));
                        }}>Convert</button>

                        <p className="result">Result : {result}</p>

                    </div>
                </form>
            </div>
        </div>
    );
}
