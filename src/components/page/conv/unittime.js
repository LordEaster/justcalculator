import React, { useEffect, useState } from "react";

import "../../css/styles.scss";
import "../../css/conv/unit.scss";

export default function ConvUnitTime() {

    useEffect(() => {
        document.title = "Unit Converter | Math tools";
    });

    const [s, setS] = useState("");
    const [ms, setMs] = useState("");
    const [micros, setMicros] = useState("");
    const [ns, setNs] = useState("");
    const [min, setMin] = useState("");
    const [h, setH] = useState("");
    const [d, setD] = useState("");
    const [w, setW] = useState("");
    const [mo, setMo] = useState("");
    const [y, setY] = useState("");
    const [dec, setDec] = useState("");
    const [cent, setCent] = useState("");
    const [mill, setMill] = useState("");
    const [planck, setPlanck] = useState("");

    const updateS = value => {
        setS(value);
        setMs(value * 1000);
        setMicros(value * 1000000);
        setNs(value * 1000000000);
        setMin(value / 60);
        setH(value / 3600);
        setD(value / 86400);
        setW(value / 604800);
        setMo(value / 2628000);
        setY(value / 31536000);
        setDec(value / 315360000);
        setCent(value / 3153600000);
        setMill(value / 31536000000);
        setPlanck(value / 5.39116e-44);
    }

    const updateMs = value => {
        setMs(value);
        setS(value / 1000);
        setMicros(value * 1000);
        setNs(value * 1000000);
        setMin(value / 60000);
        setH(value / 3600000);
        setD(value / 86400000);
        setW(value / 604800000);
        setMo(value / 2628000000);
        setY(value / 31536000000);
        setDec(value / 315360000000);
        setCent(value / 3153600000000);
        setMill(value / 31536000000000);
        setPlanck(value / 5.39116e-47);
    }

    const updateMicros = value => {
        setMicros(value);
        setS(value / 1000000);
        setMs(value / 1000);
        setNs(value * 1000);
        setMin(value / 60000000);
        setH(value / 3600000000);
        setD(value / 86400000000);
        setW(value / 604800000000);
        setMo(value / 2628000000000);
        setY(value / 31536000000000);
        setDec(value / 315360000000000);
        setCent(value / 3153600000000000);
        setMill(value / 31536000000000000);
        setPlanck(value / 5.39116e-50);
    }

    const updateNs = value => {
        setNs(value);
        setS(value / 1000000000);
        setMs(value / 1000000);
        setMicros(value / 1000);
        setMin(value / 60000000000);
        setH(value / 3600000000000);
        setD(value / 86400000000000);
        setW(value / 604800000000000);
        setMo(value / 2628000000000000);
        setY(value / 31536000000000000);
        setDec(value / 315360000000000000);
        setCent(value / 3153600000000000000);
        setMill(value / 31536000000000000000);
        setPlanck(value / 5.39116e-53);
    }

    const updateMin = value => {
        setMin(value);
        setS(value * 60);
        setMs(value * 60000);
        setMicros(value * 60000000);
        setNs(value * 60000000000);
        setH(value / 60);
        setD(value / 1440);
        setW(value / 10080);
        setMo(value / 43800);
        setY(value / 525600);
        setDec(value / 5256000);
        setCent(value / 52560000);
        setMill(value / 525600000);
        setPlanck(value / 3.24078e-44);
    }

    const updateH = value => {
        setH(value);
        setS(value * 3600);
        setMs(value * 3600000);
        setMicros(value * 3600000000);
        setNs(value * 3600000000000);
        setMin(value * 60);
        setD(value / 24);
        setW(value / 168);
        setMo(value / 730);
        setY(value / 8760);
        setDec(value / 87600);
        setCent(value / 876000);
        setMill(value / 8760000);
        setPlanck(value / 1.90128e-43);
    }

    const updateD = value => {
        setD(value);
        setS(value * 86400);
        setMs(value * 86400000);
        setMicros(value * 86400000000);
        setNs(value * 86400000000000);
        setMin(value * 1440);
        setH(value * 24);
        setW(value / 7);
        setMo(value / 30.417);
        setY(value / 365);
        setDec(value / 3650);
        setCent(value / 36500);
        setMill(value / 365000);
        setPlanck(value / 2.73791e-42);
    }

    const updateW = value => {
        setW(value);
        setS(value * 604800);
        setMs(value * 604800000);
        setMicros(value * 604800000000);
        setNs(value * 604800000000000);
        setMin(value * 10080);
        setH(value * 168);
        setD(value * 7);
        setMo(value / 4.34524);
        setY(value / 52.143);
        setDec(value / 521.429);
        setCent(value / 5214.29);
        setMill(value / 52142.9);
        setPlanck(value / 3.90259e-41);
    }

    const updateMo = value => {
        setMo(value);
        setS(value * 2628000);
        setMs(value * 2628000000);
        setMicros(value * 2628000000000);
        setNs(value * 2628000000000000);
        setMin(value * 43800);
        setH(value * 730);
        setD(value * 30.417);
        setW(value * 4.34524);
        setY(value / 12);
        setDec(value / 120);
        setCent(value / 1200);
        setMill(value / 12000);
        setPlanck(value / 1.62725e-40);
    }

    const updateY = value => {
        setY(value);
        setS(value * 31536000);
        setMs(value * 31536000000);
        setMicros(value * 31536000000000);
        setNs(value * 31536000000000000);
        setMin(value * 525600);
        setH(value * 8760);
        setD(value * 365);
        setW(value * 52.143);
        setMo(value * 12);
        setDec(value / 10);
        setCent(value / 100);
        setMill(value / 1000);
        setPlanck(value / 1.35639e-39);
    }

    const updateDec = value => {
        setDec(value);
        setS(value * 315360000);
        setMs(value * 315360000000);
        setMicros(value * 315360000000000);
        setNs(value * 315360000000000000);
        setMin(value * 5256000);
        setH(value * 87600);
        setD(value * 3650);
        setW(value * 521.429);
        setMo(value * 120);
        setY(value * 10);
        setCent(value / 10);
        setMill(value / 100);
        setPlanck(value / 1.35639e-38);
    }

    const updateCent = value => {
        setCent(value);
        setS(value * 3153600000);
        setMs(value * 3153600000000);
        setMicros(value * 3153600000000000);
        setNs(value * 3153600000000000000);
        setMin(value * 52560000);
        setH(value * 876000);
        setD(value * 36500);
        setW(value * 5214.29);
        setMo(value * 1200);
        setY(value * 100);
        setDec(value * 10);
        setMill(value / 10);
        setPlanck(value / 1.35639e-37);
    }

    const updateMill = value => {
        setMill(value);
        setS(value * 31536000000);
        setMs(value * 31536000000000);
        setMicros(value * 31536000000000000);
        setNs(value * 31536000000000000000);
        setMin(value * 525600000);
        setH(value * 8760000);
        setD(value * 365000);
        setW(value * 52142.9);
        setMo(value * 12000);
        setY(value * 1000);
        setDec(value * 100);
        setCent(value * 10);
        setPlanck(value / 1.35639e-36);
    }

    const updatePlanck = value => {
        setPlanck(value);
        setS(value * 5.39116e-53);
        setMs(value * 5.39116e-50);
        setMicros(value * 5.39116e-47);
        setNs(value * 5.39116e-44);
        setMin(value * 3.24078e-44);
        setH(value * 1.90128e-43);
        setD(value * 2.73791e-42);
        setW(value * 3.90259e-41);
        setMo(value * 1.62725e-40);
        setY(value * 1.35639e-39);
        setDec(value * 1.35639e-38);
        setCent(value * 1.35639e-37);
        setMill(value * 1.35639e-36);
    }

    return (
        <div className="content" id="content">
            <h1 className="text-center">Time Converter</h1>
            <div className="item">
                <div className="item-box">
                Second
                <input type="number" className="form-control" value={s} onChange={e => updateS(e.target.value)} />
                </div>

                <div className="item-box">
                Millisecond
                <input type="number" className="form-control" value={ms} onChange={e => updateMs(e.target.value)} />
                </div>

                <div className="item-box">
                Microsecond
                <input type="number" className="form-control" value={micros} onChange={e => updateMicros(e.target.value)} />
                </div>

                <div className="item-box">
                Nanosecond
                <input type="number" className="form-control" value={ns} onChange={e => updateNs(e.target.value)} />
                </div>

                <div className="item-box">
                Minute
                <input type="number" className="form-control" value={min} onChange={e => updateMin(e.target.value)} />
                </div>

                <div className="item-box">
                Hour
                <input type="number" className="form-control" value={h} onChange={e => updateH(e.target.value)} />
                </div>

                <div className="item-box">
                Day
                <input type="number" className="form-control" value={d} onChange={e => updateD(e.target.value)} />
                </div>

                <div className="item-box">
                Week
                <input type="number" className="form-control" value={w} onChange={e => updateW(e.target.value)} />
                </div>

                <div className="item-box">
                Month
                <input type="number" className="form-control" value={mo} onChange={e => updateMo(e.target.value)} />
                </div>

                <div className="item-box">
                Year
                <input type="number" className="form-control" value={y} onChange={e => updateY(e.target.value)} />
                </div>

                <div className="item-box">
                Decade
                <input type="number" className="form-control" value={dec} onChange={e => updateDec(e.target.value)} />
                </div>

                <div className="item-box">
                Century
                <input type="number" className="form-control" value={cent} onChange={e => updateCent(e.target.value)} />
                </div>

                <div className="item-box">
                Millenium
                <input type="number" className="form-control" value={mill} onChange={e => updateMill(e.target.value)} />
                </div>

                <div className="item-box">
                Planck Time
                <input type="number" className="form-control" value={planck} onChange={e => updatePlanck(e.target.value)} />
                </div>

            </div>
        </div>
    );
};

