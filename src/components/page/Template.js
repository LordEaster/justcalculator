import React from "react";

import "../css/styles.scss";

export default function Nav() {

    return (
        <div className="bar">
        <div class="sidebar" id="sidebar">
            <div class="p-4 sidebar-content">
                
                <div>
                <h5 class="text-white heading"> Tools</h5>
                <button className="btn btn-secondary btn-calc" onClick={() => {
                    window.location.href = "/calculator/basic";
                }}>Basic Calculator</button>

                <button className="btn btn-secondary btn-calc" onClick={() => {
                    window.location.href = "/calculator/scientific";
                }}>Scientific Calculator</button>

                <button class="btn btn-secondary btn-calc dropdown-toggle" type="button" id="dropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                Matrix Calculator
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdown2">
                    <li><a class="dropdown-item" href="/calculator/matrix/addition">Addition</a></li>

                    <li><a class="dropdown-item" href="/calculator/matrix/subtraction">Subtraction</a></li>

                    <li><a class="dropdown-item" href="/calculator/matrix/multiplication">Multiplication</a></li>

                    <li><a class="dropdown-item" href="/calculator/matrix/transpose">Transpose</a></li>

                    <li><a class="dropdown-item" href="/calculator/matrix/">Calculator</a></li>

                </ul>

                <button className="btn btn-secondary btn-calc" onClick={() => {
                    window.location.href = "/calculator/GCDLCM";
                }}>GCD & LCM Calculator</button>
                </div>

                <div>
                <button class="btn btn-secondary btn-conv dropdown-toggle" type="button" id="dropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                Unit Converter
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdown1">
                    <li><a class="dropdown-item" href="/converter/unit/length">Length</a></li>
                    <li><a class="dropdown-item" href="/converter/unit/area">Area</a></li>
                    <li><a class="dropdown-item" href="/converter/unit/volume">Volume</a></li>
                    <li><a class="dropdown-item" href="/converter/unit/mass">Mass</a></li>
                    <li><a class="dropdown-item" href="/converter/unit/time">Time</a></li>
                </ul>

                <button className="btn btn-secondary btn-conv" onClick={() => {
                    window.location.href = "/converter/base";
                }}>Base Converter</button>

                <button className="btn btn-secondary btn-tools" onClick={() => {
                    window.location.href = "/Graphing";
                }}>Graphing</button>

                </div>

                <h5 class="text-white heading">another website</h5>

                <button className="btn btn-secondary btn-more" onClick={() => {
                    window.open("https://math.tools/");
                }}>math.tools</button>

                <button className="btn btn-secondary btn-more" onClick={() => {
                    window.open("https://www.symbolab.com/");
                }}>Symbolab</button>

                <button className="btn btn-secondary btn-more" onClick={() => {
                    window.open("https://www.geogebra.org/");
                }}>GeoGebra</button>

                <button className="btn btn-secondary btn-more" onClick={() => {
                    window.open("https://www.rapidtables.com/");
                }}>rapidtables</button>

                <button className="btn btn-secondary btn-more" onClick={() => {
                    window.open("https://www.inchcalculator.com/");
                }}>inchcalculator</button>
            </div>
        </div>
        <nav class="navbar fixed-top">
        <div>
        <button class="open-menu" id="open-menu" onClick={() => {
                document.getElementById("sidebar").style.left = "0px";
                document.getElementById("close-menu").style.display = "block";
                document.getElementById("open-menu").style.display = "none";
                document.getElementById("content").style.marginLeft = "260px";
            }}><span class="material-symbols-rounded">menu</span>
        </button>

        <button class="close-menu" id="close-menu" onClick={() => {
                    document.getElementById("sidebar").style.left = "-300px";
                    document.getElementById("close-menu").style.display = "none";
                    document.getElementById("open-menu").style.display = "block";
                    document.getElementById("content").style.marginLeft = "0px";
                }}><span class="material-symbols-rounded">close</span>
        </button>
        </div>
        <div className="logo-head">JustMaths</div>
        </nav>
        </div>
    );
};