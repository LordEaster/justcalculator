import React, { useEffect ,useState } from 'react';

import '../../css/styles.scss';
import '../../css/calc/matrix.scss';

export default function MatrixAdd() {

    useEffect(() => {
        document.title = "Matrix Addition calculator | JustMaths";
    }, []);

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    // matrix input table
    function matrixInputTable() {
        const arr = input.split(",").map((n) => parseInt(n));
        const rows = arr[0];
        const cols = arr[1];
        let table = [];
        let id = 0;
        for (let i = 0; i < rows; i++) {
            let children = [];
            for (let j = 0; j < cols; j++) {
                children.push(<td><input type="text" id={id} /></td>);
                id++;
            }
            table.push(<tr>{children}</tr>);
        }
        return table;
    }
                  
    return (
        <div className="matrix-add">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Matrix Addition</h1>
                        <p className="text-center">Enter the number of rows and columns of the matrix to add.</p>

                        <form className="form-inline justify-content-center">
                            <div className="form-group">
                                <label htmlFor="input1">Rows</label>
                                <input type="text" className="form-control" id="input1" placeholder="Enter number" onChange={(e) => setInput(e.target.value)} />

                                <label htmlFor="input2">Columns</label>
                                <input type="text" className="form-control" id="input2" placeholder="Enter number" onChange={(e) => setInput(e.target.value)} />

                                <button type="submit" className="btn btn-primary" onClick={(e) => {
                                    e.preventDefault();
                                    setResult(matrixInputTable());
                                }}>Calculate</button>

                                <table className="result">
                                    <tbody>
                                        {result}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>                               
        </div>  
    );
}