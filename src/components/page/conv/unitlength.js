import React, { useEffect, useState } from "react";

import "../../css/styles.scss";
import "../../css/conv/unit.scss";

export default function ConvUnitLength() {

    useEffect(() => {
        document.title = "Unit Converter | Math tools";
    });

    // input meter and convert to other units
    const [meter, setMeter] = useState("");
    const [kilometer, setKilometer] = useState("");
    const [centimeter, setCentimeter] = useState("");
    const [millimeter, setMillimeter] = useState("");
    const [micrometer, setMicrometer] = useState("");
    const [nanometer, setNanometer] = useState("");
    const [mile, setMile] = useState("");
    const [yard, setYard] = useState("");
    const [foot, setFoot] = useState("");
    const [inch, setInch] = useState("");
    const [lightyear, setLightyear] = useState("");
    const [astronomicalunit, setAstronomicalunit] = useState("");
    const [parsec, setParsec] = useState("");

    const updateMeter = (value) => {
        setMeter(value);
        setKilometer(value / 1000);
        setCentimeter(value * 100);
        setMillimeter(value * 1000);
        setMicrometer(value * 1000000);
        setNanometer(value * 1000000000);
        setMile(value / 1609.344);
        setYard(value * 1.0936132983377078);
        setFoot(value * 3.280839895013123);
        setInch(value * 39.37007874015748);
        setLightyear(value * 1.0570008340246158e-16);
        setAstronomicalunit(value * 6.684587122268445e-12);
        setParsec(value * 3.240779289469756e-17);
    }

    const updateKilometer = (value) => {
        setMeter(value * 1000);
        setKilometer(value);
        setCentimeter(value * 100000);
        setMillimeter(value * 1000000);
        setMicrometer(value * 1000000000);
        setNanometer(value * 1000000000000);
        setMile(value / 1.609344);
        setYard(value * 1093.6132983377078);
        setFoot(value * 3280.839895013123);
        setInch(value * 39370.07874015748);
        setLightyear(value * 1.0570008340246158e-13);
        setAstronomicalunit(value * 6.684587122268445e-9);
        setParsec(value * 3.240779289469756e-14);
    }

    const updateCentimeter = (value) => {
        setMeter(value / 100);
        setKilometer(value / 100000);
        setCentimeter(value);
        setMillimeter(value * 10);
        setMicrometer(value * 10000);
        setNanometer(value * 10000000);
        setMile(value / 160934.4);
        setYard(value / 91.44);
        setFoot(value / 30.48);
        setInch(value / 2.54);
        setLightyear(value * 1.0570008340246158e-18);
        setAstronomicalunit(value * 6.684587122268445e-14);
        setParsec(value * 3.240779289469756e-19);
    }

    const updateMillimeter = (value) => {
        setMeter(value / 1000);
        setKilometer(value / 1000000);
        setCentimeter(value / 10);
        setMillimeter(value);
        setMicrometer(value * 1000);
        setNanometer(value * 1000000);
        setMile(value / 1609344);
        setYard(value / 914.4);
        setFoot(value / 304.8);
        setInch(value / 25.4);
        setLightyear(value * 1.0570008340246158e-19);
        setAstronomicalunit(value * 6.684587122268445e-15);
        setParsec(value * 3.240779289469756e-20);
    }

    const updateMicrometer = (value) => {
        setMeter(value / 1000000);
        setKilometer(value / 1000000000);
        setCentimeter(value / 10000);
        setMillimeter(value / 1000);
        setMicrometer(value);
        setNanometer(value * 1000);
        setMile(value / 1609344000);
        setYard(value / 914400);
        setFoot(value / 304800);
        setInch(value / 25400);
        setLightyear(value * 1.0570008340246158e-22);
        setAstronomicalunit(value * 6.684587122268445e-18);
        setParsec(value * 3.240779289469756e-23);
    }

    const updateNanometer = (value) => {
        setMeter(value / 1000000000);
        setKilometer(value / 1000000000000);
        setCentimeter(value / 10000000);
        setMillimeter(value / 1000000);
        setMicrometer(value / 1000);
        setNanometer(value);
        setMile(value / 1609344000000);
        setYard(value / 914400000);
        setFoot(value / 304800000);
        setInch(value / 25400000);
        setLightyear(value * 1.0570008340246158e-25);
        setAstronomicalunit(value * 6.684587122268445e-21);
        setParsec(value * 3.240779289469756e-26);
    }

    const updateMile = (value) => {
        setMeter(value * 1609.344);
        setKilometer(value * 1.609344);
        setCentimeter(value * 160934.4);
        setMillimeter(value * 1609344);
        setMicrometer(value * 1609344000);
        setNanometer(value * 1609344000000);
        setMile(value);
        setYard(value * 1760);
        setFoot(value * 5280);
        setInch(value * 63360);
        setLightyear(value * 1.701101110936679e-13);
        setAstronomicalunit(value * 1.0570008340246158e-8);
        setParsec(value * 5.214952119923e-14);
    }

    const updateYard = (value) => {
        setMeter(value / 1.0936132983377078);
        setKilometer(value / 1093.6132983377078);
        setCentimeter(value * 91.44);
        setMillimeter(value * 914.4);
        setMicrometer(value * 914400);
        setNanometer(value * 914400000);
        setMile(value / 1760);
        setYard(value);
        setFoot(value * 3);
        setInch(value * 36);
        setLightyear(value * 9.66571554215111e-15);
        setAstronomicalunit(value * 5.937007874015748e-10);
        setParsec(value * 2.957352956826025e-15);
    }

    const updateFoot = (value) => {
        setMeter(value / 3.280839895013123);
        setKilometer(value / 3280.839895013123);
        setCentimeter(value * 30.48);
        setMillimeter(value * 304.8);
        setMicrometer(value * 304800);
        setNanometer(value * 304800000);
        setMile(value / 5280);
        setYard(value / 3);
        setFoot(value);
        setInch(value * 12);
        setLightyear(value * 3.221571847383703e-15);
        setAstronomicalunit(value * 1.968503937007874e-10);
        setParsec(value * 9.854509855420083e-16);
    }

    const updateInch = (value) => {
        setMeter(value / 39.37007874015748);
        setKilometer(value / 39370.07874015748);
        setCentimeter(value * 2.54);
        setMillimeter(value * 25.4);
        setMicrometer(value * 25400);
        setNanometer(value * 25400000);
        setMile(value / 63360);
        setYard(value / 36);
        setFoot(value / 12);
        setInch(value);
        setLightyear(value * 2.684789777975952e-16);
        setAstronomicalunit(value * 1.639344262295082e-11);
        setParsec(value * 8.212091250350069e-17);
    }

    const updateLightyear = (value) => {
        setMeter(value * 9.4607304725808e+15);
        setKilometer(value * 9.4607304725808e+12);
        setCentimeter(value * 9.4607304725808e+17);
        setMillimeter(value * 9.4607304725808e+18);
        setMicrometer(value * 9.4607304725808e+21);
        setNanometer(value * 9.4607304725808e+24);
        setMile(value * 5878625373183.897);
        setYard(value * 1034638926167.795);
        setFoot(value * 3113916778503.385);
        setInch(value * 37367161422040.03);
        setLightyear(value);
        setAstronomicalunit(value * 63241.077084);
        setParsec(value * 0.306601);
    }

    const updateAstronomicalunit = (value) => {
        setMeter(value * 149597870700);
        setKilometer(value * 149597870.7);
        setCentimeter(value * 14959787070000);
        setMillimeter(value * 149597870700000);
        setMicrometer(value * 149597870700000000);
        setNanometer(value * 149597870700000000000);
        setMile(value * 92955807.267);
        setYard(value * 166021.4434);
        setFoot(value * 498064.3302);
        setInch(value * 5976796.3624);
        setLightyear(value * 1.581e-5);
        setAstronomicalunit(value);
        setParsec(value * 0.00484813681109536);
    }

    const updateParsec = (value) => {
        setMeter(value * 30856775814913600);
        setKilometer(value * 30856775814913.6);
        setCentimeter(value * 3085677581491360000);
        setMillimeter(value * 30856775814913600000);
        setMicrometer(value * 30856775814913600000000);
        setNanometer(value * 30856775814913600000000000);
        setMile(value * 19173561600000);
        setYard(value * 3404825440000);
        setFoot(value * 10214476320000);
        setInch(value * 122572914640000);
        setLightyear(value * 3.261563777);
        setAstronomicalunit(value * 206264.806247);
        setParsec(value);
    }


    return (
        <div>
        <div className="form-group">
            <div className="item-box">
            Meter
            <input type="number" className="form-control" value={meter} onChange={(e) => updateMeter(e.target.value)} />
            </div>

            <div className="item-box">
            Kilometer
            <input type="number" className="form-control" value={kilometer} onChange={(e) => updateKilometer(e.target.value)} />
            </div>

            <div className="item-box">
            Centimeter
            <input type="number" className="form-control" value={centimeter} onChange={(e) => updateCentimeter(e.target.value)} />
            </div>

            <div className="item-box">
            Millimeter
            <input type="number" className="form-control" value={millimeter} onChange={(e) => updateMillimeter(e.target.value)} />
            </div>

            <div className="item-box">
            Micrometer
            <input type="number" className="form-control" value={micrometer} onChange={(e) => updateMicrometer(e.target.value)} />
            </div>

            <div className="item-box">
            Nanometer
            <input type="number" className="form-control" value={nanometer} onChange={(e) => updateNanometer(e.target.value)} />
            </div>

            <div className="item-box">
            Mile
            <input type="number" className="form-control" value={mile} onChange={(e) => updateMile(e.target.value)} />
            </div>

            <div className="item-box">
            Yard
            <input type="number" className="form-control" value={yard} onChange={(e) => updateYard(e.target.value)} />
            </div>

            <div className="item-box">
            Foot
            <input type="number" className="form-control" value={foot} onChange={(e) => updateFoot(e.target.value)} />
            </div>

            <div className="item-box">
            Inch
            <input type="number" className="form-control" value={inch} onChange={(e) => updateInch(e.target.value)} />
            </div>

            <div className="item-box">
            Lightyear
            <input type="number" className="form-control" value={lightyear} onChange={(e) => updateLightyear(e.target.value)} />
            </div>

            <div className="item-box">
            Astronomical Unit
            <input type="number" className="form-control" value={astronomicalunit} onChange={(e) => updateAstronomicalunit(e.target.value)} />
            </div>

            <div className="item-box">
            Parsec
            <input type="number" className="form-control" value={parsec} onChange={(e) => updateParsec(e.target.value)} />
            </div>

        </div>
        </div>
    );
};