import React, { useEffect } from "react";

import "../../css/styles.scss";
import "../../css/calc/matrix.scss";

export default function Matrix() {

    useEffect(() => {
        document.title = "Matrix calculator | JustMaths";
    }, []);

    return (
        <div className="content matrix" id="content">
            <iframe width="100%" height="100%" src="https://www.desmos.com/matrix" title="matrix" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}