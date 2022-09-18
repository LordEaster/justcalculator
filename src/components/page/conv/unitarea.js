import React, { useEffect, useState } from "react";

import "../../css/styles.scss";
import "../../css/conv/unit.scss";

export default function ConvUnitArea() {


    useEffect(() => {
        document.title = "Unit Converter | Math tools";
    });

    // input square meter and convert to other units
    const [sqmeter, setSqmeter] = useState("");
    const [sqkilometer, setSqkilometer] = useState("");
    const [sqcentimeter, setSqcentimeter] = useState("");
    const [sqmillimeter, setSqmillimeter] = useState("");
    const [sqfoot, setSqfoot] = useState("");
    const [sqinch, setSqinch] = useState("");
    const [sqyard, setSqyard] = useState("");
    const [sqmile, setSqmile] = useState("");

    const updatesqmeter = (value) => {
        setSqmeter(value);
        setSqkilometer(value / 1000000);
        setSqcentimeter(value * 10000);
        setSqmillimeter(value * 1000000);
        setSqfoot(value * 10.7639);
        setSqinch(value * 1550);
        setSqyard(value * 1.19599);
        setSqmile(value / 2589988.11);
    }

    const updatesqkilometer = (value) => {
        setSqkilometer(value);
        setSqmeter(value * 1000000);
        setSqcentimeter(value * 10000000000);
        setSqmillimeter(value * 1000000000000);
        setSqfoot(value * 10763910.4);
        setSqinch(value * 1550003100);
        setSqyard(value * 1195990.05);
        setSqmile(value / 2.58999);
    }

    const updatesqcentimeter = (value) => {
        setSqcentimeter(value);
        setSqmeter(value / 10000);
        setSqkilometer(value / 10000000000);
        setSqmillimeter(value * 100);
        setSqfoot(value / 929.03);
        setSqinch(value / 6.4516);
        setSqyard(value / 8361.27);
        setSqmile(value / 2.58999e+13);
    }

    const updatesqmillimeter = (value) => {
        setSqmillimeter(value);
        setSqmeter(value / 1000000);
        setSqkilometer(value / 1000000000000);
        setSqcentimeter(value / 100);
        setSqfoot(value / 929030);
        setSqinch(value / 645.16);
        setSqyard(value / 836127);
        setSqmile(value / 2.58999e+15);
    }

    const updatesqfoot = (value) => {
        setSqfoot(value);
        setSqmeter(value / 10.7639);
        setSqkilometer(value / 10763910.4);
        setSqcentimeter(value * 929.03);
        setSqmillimeter(value * 929030);
        setSqinch(value * 144);
        setSqyard(value / 9);
        setSqmile(value / 27878400);
    }

    const updatesqinch = (value) => {
        setSqinch(value);
        setSqmeter(value / 1550);
        setSqkilometer(value / 1550003100);
        setSqcentimeter(value * 6.4516);
        setSqmillimeter(value * 645.16);
        setSqfoot(value / 144);
        setSqyard(value / 1296);
        setSqmile(value / 4.014e+12);
    }

    const updatesqyard = (value) => {
        setSqyard(value);
        setSqmeter(value / 1.19599);
        setSqkilometer(value / 1195990.05);
        setSqcentimeter(value * 8361.27);
        setSqmillimeter(value * 836127);
        setSqfoot(value * 9);
        setSqinch(value * 1296);
        setSqmile(value / 3097600);
    }

    const updatesqmile = (value) => {
        setSqmile(value);
        setSqmeter(value * 2589988.11);
        setSqkilometer(value * 2.58999);
        setSqcentimeter(value * 2.58999e+13);
        setSqmillimeter(value * 2.58999e+15);
        setSqfoot(value * 27878400);
        setSqinch(value * 4.014e+12);
        setSqyard(value * 3097600);
    }

    return (
        <div className="content" id="content">
            <h1 className="text-center">Area Converter</h1>
            <div className="item">
                <div className="item-box">
                Square Meter
                <input type="number" className="form-control" value={sqmeter} onChange={(e) => updatesqmeter(e.target.value)} />
                </div>

                <div className="item-box">
                Square Kilometer
                <input type="number" className="form-control" value={sqkilometer} onChange={(e) => updatesqkilometer(e.target.value)} />
                </div>

                <div className="item-box">
                Square Centimeter
                <input type="number" className="form-control" value={sqcentimeter} onChange={(e) => updatesqcentimeter(e.target.value)} />
                </div>

                <div className="item-box">
                Square Millimeter
                <input type="number" className="form-control" value={sqmillimeter} onChange={(e) => updatesqmillimeter(e.target.value)} />
                </div>

                <div className="item-box">
                Square Foot
                <input type="number" className="form-control" value={sqfoot} onChange={(e) => updatesqfoot(e.target.value)} />
                </div>

                <div className="item-box">
                Square Inch
                <input type="number" className="form-control" value={sqinch} onChange={(e) => updatesqinch(e.target.value)} />
                </div>

                <div className="item-box">
                Square Yard
                <input type="number" className="form-control" value={sqyard} onChange={(e) => updatesqyard(e.target.value)} />
                </div>

                <div className="item-box">
                Square Mile
                <input type="number" className="form-control" value={sqmile} onChange={(e) => updatesqmile(e.target.value)} />
                </div>
            </div>
        </div>
    );
};
