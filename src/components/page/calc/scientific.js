import React, { useEffect, useState } from "react";

import "../../css/styles.scss";
import "../../css/calc/scientific.scss";

export default function Scientific() {

    useEffect(() => {
        document.title = "Scientific Calculator | JustMaths";
    }, []);

    return (
        <div className="content sci" id="content">
            <iframe width="100%" height="100%" src="https://www.desmos.com/scientific" title="Graphing" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

