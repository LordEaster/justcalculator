import React, { useEffect,useState } from 'react';

import '../../css/styles.scss';
import '../../css/conv/unit.scss';

export default function ConvUnitVolume() {

    useEffect (() => {
        document.title = "Unit Converter | Math tools";
    });

    const [cubicmeter, setCubicmeter] = useState("");
    const [cubiccentimeter, setCubiccentimeter] = useState("");
    const [cubicmillimeter, setCubicmillimeter] = useState("");
    const [cubicfoot, setCubicfoot] = useState("");
    const [cubicinch, setCubicinch] = useState("");
    const [cubicyard, setCubicyard] = useState("");
    const [cubicmile, setCubicmile] = useState("");

    const updatecubicmeter = (value) => {
        setCubicmeter(value);
        setCubiccentimeter(value * 1000000);
        setCubicmillimeter(value * 1000000000);
        setCubicfoot(value * 35.3147);
        setCubicinch(value * 61023.7);
        setCubicyard(value * 1.30795);
        setCubicmile(value / 4168181825.44);
    }

    const updatecubiccentimeter = (value) => {
        setCubiccentimeter(value);
        setCubicmeter(value / 1000000);
        setCubicmillimeter(value * 1000);
        setCubicfoot(value / 28316.8);
        setCubicinch(value / 16.3871);
        setCubicyard(value / 764554.858);
        setCubicmile(value / 4.16818e+15);
    }

    const updatecubicmillimeter = (value) => {
        setCubicmillimeter(value);
        setCubicmeter(value / 1000000000);
        setCubiccentimeter(value / 1000);
        setCubicfoot(value / 28316800);
        setCubicinch(value / 16387.064);
        setCubicyard(value / 764554858);
        setCubicmile(value / 4.16818e+18);
    }

    const updatecubicfoot = (value) => {
        setCubicfoot(value);
        setCubicmeter(value / 35.3147);
        setCubiccentimeter(value * 28316.8);
        setCubicmillimeter(value * 28316800);
        setCubicinch(value * 1728);
        setCubicyard(value / 27);
        setCubicmile(value / 1.89394e+7);
    }

    const updatecubicinch = (value) => {
        setCubicinch(value);
        setCubicmeter(value / 61023.7);
        setCubiccentimeter(value * 16.3871);
        setCubicmillimeter(value * 16387.064);
        setCubicfoot(value / 1728);
        setCubicyard(value / 46656);
        setCubicmile(value / 3.306e+10);
    }

    const updatecubicyard = (value) => {
        setCubicyard(value);
        setCubicmeter(value / 1.30795);
        setCubiccentimeter(value * 764554.858);
        setCubicmillimeter(value * 764554858);
        setCubicfoot(value * 27);
        setCubicinch(value * 46656);
        setCubicmile(value / 764554.858);
    }

    const updatecubicmile = (value) => {
        setCubicmile(value);
        setCubicmeter(value * 4168181825.44);
        setCubiccentimeter(value * 4.16818e+15);
        setCubicmillimeter(value * 4.16818e+18);
        setCubicfoot(value * 1.89394e+7);
        setCubicinch(value * 3.306e+10);
        setCubicyard(value * 764554.858);
    }

    return (
        <div className='content' id='content'>
            <h1 className="text-center">Volume Converter</h1>
            <div className="item">
                <div className="item-box">
                Cubic Meter
                <input type="number" className="form-control" value={cubicmeter} onChange={(e) => updatecubicmeter(e.target.value)} />
                </div>

                <div className="item-box">
                Cubic Centimeter
                <input type="number" className="form-control" value={cubiccentimeter} onChange={(e) => updatecubiccentimeter(e.target.value)} />
                </div>

                <div className="item-box">
                Cubic Millimeter
                <input type="number" className="form-control" value={cubicmillimeter} onChange={(e) => updatecubicmillimeter(e.target.value)} />
                </div>

                <div className="item-box">
                Cubic Foot
                <input type="number" className="form-control" value={cubicfoot} onChange={(e) => updatecubicfoot(e.target.value)} />
                </div>

                <div className="item-box">
                Cubic Inch
                <input type="number" className="form-control" value={cubicinch} onChange={(e) => updatecubicinch(e.target.value)} />
                </div>

                <div className="item-box">
                Cubic Yard
                <input type="number" className="form-control" value={cubicyard} onChange={(e) => updatecubicyard(e.target.value)} />
                </div>

                <div className="item-box">
                Cubic Mile
                <input type="number" className="form-control" value={cubicmile} onChange={(e) => updatecubicmile(e.target.value)} />
                </div>
                
            </div>
        </div>
    );
};
        


