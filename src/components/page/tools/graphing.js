import React, { useEffect } from "react";

import "../../css/styles.scss";
import "../../css/tools/graphing.scss";

export default function Graphing() {

    useEffect(() => {
        document.title = "Graphing Calculator | JustMaths";
    }, []);

    return (
        <div className="content graphing" id="content">
            <iframe width="100%" height="100%" src="https://www.desmos.com/calculator" title="Graphing" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}