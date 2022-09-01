import React, { useEffect } from "react";

import "../css/styles.scss";

export default function Nav() {

    return (
        <div>
        <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
            </div>
        </div>
        <nav class="navbar">
        <div class="container-fluid">
            Just Calculator
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            </div>
        </nav>
        <nav class="navbar fixed-bottom navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">#</a>
            </div>
        </nav>
        </div>
    );
};