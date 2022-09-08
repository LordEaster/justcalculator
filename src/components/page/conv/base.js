import React, { useState } from 'react';

import '../../css/styles.scss';
import '../../css/conv/base.scss';

export default function ConvBase() {

    const [baseM, setBaseM] = useState(10);
    const [baseN, setBaseN] = useState(2);
    const [numberM, setNumberM] = useState(0);
    const [numberN, setNumberN] = useState(0);

    const convertBase = (number, base) => {
        let result = '';
        let remainder = 0;
        let quotient = number;
        while (quotient > 0) {
            remainder = quotient % base;
            quotient = Math.floor(quotient / base);
            result = remainder + result;
        }
        return result;
    }

    const updateNumberM = (value) => {
        setNumberM(value);
        setNumberN(convertBase(value, baseN));
    }

    const updateNumberN = (value) => {
        setNumberN(value);
        setNumberM(convertBase(value, baseM));
    }

    const updateBaseM = (value) => {
        setBaseM(value);
        setNumberN(convertBase(numberM, value));
    }

    const updateBaseN = (value) => {
        setBaseN(value);
        setNumberM(convertBase(numberN, value));
    }

    return (
        <div className="conv-base">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Base Converter</h1>
                        <p className="text-center">Convert a number from one base to another.</p>

                        <form className="form-inline justify-content-center">
                            <div className="form-group">
                                <label htmlFor="baseM">Base M</label>
                                <input type="number" className="form-control" id="baseM" placeholder="Enter base" value={baseM} onChange={(e) => updateBaseM(e.target.value)} />

                                <label htmlFor="numberM">Number M</label>
                                <input type="number" className="form-control" id="numberM" placeholder="Enter number" value={numberM} onChange={(e) => updateNumberM(e.target.value)} />

                                <label htmlFor="baseN">Base N</label>
                                <input type="number" className="form-control" id="baseN" placeholder="Enter base" value={baseN} onChange={(e) => updateBaseN(e.target.value)} />

                                <label htmlFor="numberN">Number N</label>
                                <input type="number" className="form-control" id="numberN" placeholder="Enter number" value={numberN} onChange={(e) => updateNumberN(e.target.value)} />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
