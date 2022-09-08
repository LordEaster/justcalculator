import React, { useEffect } from "react";

import "../css/styles.scss";

export default function Nav() {

    return (
        <div>
        <div class="sidebar" id="sidebar">
            <div class="p-4 sidebar-content">
                
                <div>
                <h5 class="text-white">Calculator</h5>
                <button className="btn btn-secondary btn-calc" onClick={() => {
                    window.location.href = "/calculator/basic";
                }}>Basic</button>

                <button className="btn btn-secondary btn-calc" disabled onClick={() => {
                    window.location.href = "/calculator/scientific";
                }}>Scientific</button>

                <button class="btn btn-secondary btn-calc dropdown-toggle" type="button" id="dropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                Matrix
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdown2">
                    <li><a class="dropdown-item" href="/calculator/matrix/addition">Addition</a></li>
                    <li><a class="dropdown-item" href="/calculator/matrix/multiplication">Multiplication</a></li>
                </ul>

                <button className="btn btn-secondary btn-calc" onClick={() => {
                    window.location.href = "/calculator/GCDLCM";
                }}>GCD & LCM</button>
                </div>

                <div>
                <h5 class="text-white">Converter</h5>

                <button class="btn btn-secondary btn-conv dropdown-toggle" type="button" id="dropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                Unit
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
                }}>Base</button>
                </div>

                <h5 class="text-white">more . . .</h5>

                <button className="btn btn-secondary btn-more" onClick={() => {
                    window.open("https://math.tools/");
                }}>math.tools</button>

                <button className="btn btn-secondary btn-more" onClick={() => {
                    window.open("https://www.symbolab.com/");
                }}>Symbolab</button>

                <button className="btn btn-secondary btn-more" onClick={() => {
                    window.open("https://www.desmos.com/calculator");
                }}>Desmos | Graphing</button>
            </div>
        </div>
        <nav class="navbar fixed-top">
        <div>
        <button class="open-menu" id="open-menu" onClick={() => {
                document.getElementById("sidebar").style.left = "0px";
                document.getElementById("close-menu").style.display = "block";
                document.getElementById("open-menu").style.display = "none";
                document.getElementById("page-content").style.left = "500px";
            }}><span class="material-symbols-rounded">menu</span>
        </button>

        <button class="close-menu" id="close-menu" onClick={() => {
                    document.getElementById("sidebar").style.left = "-500px";
                    document.getElementById("close-menu").style.display = "none";
                    document.getElementById("open-menu").style.display = "block";
                    document.getElementById("page-content").style.left = "0px";
                }}><span class="material-symbols-rounded">close</span>
        </button>
        </div>
        <div className="logo-head">Just Math</div>
        </nav>
        {/* <nav class="navbar fixed-bottom navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            </div>
        </nav> */}
        </div>
    );
};