// logarithm of a to base b

import React, { useState, useEffect } from 'react';

import '../../css/styles.scss';
import '../../css/calc/loga.scss';

export default function LogA() {

    useEffect(() => {
        document.title = "Logarithm Calculator | Math tools";
    });

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [base, setBase] = useState(2);

    const loga = (a, b) => {
        return Math.log(a) / Math.log(b);
    }

    return (
        <div>

        </div>
    );
}
