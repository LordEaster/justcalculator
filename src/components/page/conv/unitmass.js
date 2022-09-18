import React, { useEffect,useState } from 'react';

import '../../css/styles.scss';
import '../../css/conv/unit.scss';

export default function ConvUnitMass() {

    useEffect(() => {
        document.title = "Unit Converter | Math tools";
    });

    const [kg, setKg] = useState("");
    const [g, setG] = useState("");
    const [mg, setMg] = useState("");
    const [lb, setLb] = useState("");
    const [oz, setOz] = useState("");
    const [t, setT] = useState("");

    const updateKg = value => {
        setKg(value);
        setG(value * 1000);
        setMg(value * 1000000);
        setLb(value * 2.20462);
        setOz(value * 35.274);
        setT(value / 1000);
    }

    const updateG = value => {
        setG(value);
        setKg(value / 1000);
        setMg(value * 1000);
        setLb(value / 453.592);
        setOz(value / 28.3495);
        setT(value / 1000000);
    }

    const updateMg = value => {
        setMg(value);
        setKg(value / 1000000);
        setG(value / 1000);
        setLb(value / 453592);
        setOz(value / 28349.5);
        setT(value / 1e+9);
    }

    const updateLb = value => {
        setLb(value);
        setKg(value / 2.20462);
        setG(value * 453.592);
        setMg(value * 453592);
        setOz(value * 16);
        setT(value / 2204.62);
    }

    const updateOz = value => {
        setOz(value);
        setKg(value / 35.274);
        setG(value * 28.3495);
        setMg(value * 28349.5);
        setLb(value / 16);
        setT(value / 35274);
    }

    const updateT = value => {
        setT(value);
        setKg(value * 1000);
        setG(value * 1000000);
        setMg(value * 1e+9);
        setLb(value * 2204.62);
        setOz(value * 35274);
    }


    return (
        <div className='content' id='content'>
            <h1 className="text-center">Mass Converter</h1>
            <div className="item">
                <div className="item-box">
                Kilogram
                <input type="number" className="form-control" value={kg} onChange={e => updateKg(e.target.value)} />
                </div>

                <div className="item-box">
                Gram
                <input type="number" className="form-control" value={g} onChange={e => updateG(e.target.value)} />
                </div>

                <div className="item-box">
                Milligram
                <input type="number" className="form-control" value={mg} onChange={e => updateMg(e.target.value)} />
                </div>

                <div className="item-box">
                Pound
                <input type="number" className="form-control" value={lb} onChange={e => updateLb(e.target.value)} />
                </div>

                <div className="item-box">
                Ounce
                <input type="number" className="form-control" value={oz} onChange={e => updateOz(e.target.value)} />
                </div>

                <div className="item-box">
                Ton
                <input type="number" className="form-control" value={t} onChange={e => updateT(e.target.value)} />
                </div>

            </div>
        </div>
    )
}