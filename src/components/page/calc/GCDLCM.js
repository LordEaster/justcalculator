import React, { useEffect, useState } from "react";

import "../../css/styles.scss";
import "../../css/calc/GCDLCM.scss";

export default function GCDLCM() {

    useEffect(() => {
        document.title = "GCD & LCM Calculator | Math tools";
    });

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    function gcd(a, b) {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }
    
    function lcm(a, b) {
        return a * b / gcd(a, b);
    }
    
    function gcdlcm(input) {
        const arr = input.split(",").map((n) => parseInt(n));
        let result = [arr[0], arr[0]];
        for (let i = 1; i < arr.length; i++) {
            result[0] = gcd(result[0], arr[i]);
            result[1] = lcm(result[1], arr[i]);
        }
        return result;
    }



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">GCD & LCM Calculator</h1>
                        <p className="text-center">Enter two numbers to calculate their GCD and LCM.</p>

                        <form className="form-inline justify-content-center">
                            <div className="form-group">
                                <label htmlFor="input1">Enter number</label>
                                <input type="text" className="form-control" id="input1" placeholder="split number with , (comma)" onChange={(e) => setInput(e.target.value)} />

                                <button type="submit" className="btn btn-primary" onClick={(e) => {
                                    e.preventDefault();
                                    setResult(gcdlcm(input));
                                }}>Calculate</button>

                                <p className="result">GCD {result[0]}</p>
                                <p className="result">LCM {result[1]}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

