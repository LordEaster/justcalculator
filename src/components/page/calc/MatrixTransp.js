import React, { useEffect, useState } from "react";

import "../../css/styles.scss";
import "../../css/calc/matrix.scss";

export default function MatrixTranspose() {

    useEffect(() => {
        document.title = "Matrix Transpose calculator | JustMaths";
    }, []);

    // make a matrix with given rows and columns by input form and dropdown for rows and columns
    const [m, setm] = useState(2);
    const [n, setn] = useState(2);
    const [matrix, setMatrix] = useState([]);
    const [result, setResult] = useState([]);

    const makeMatrix = (m, n) => {
        let matrix = [];
        for (let i = 0; i < m; i++) {
            let row = [];
            for (let j = 0; j < n; j++) {
                row.push(0);
            }
            matrix.push(row);
        }
        return matrix;
    }

    const matrixTranspose = (matrix) => {
        let result = [];
        for (let i = 0; i < matrix[0].length; i++) {
            let row = [];
            for (let j = 0; j < matrix.length; j++) {
                row.push(matrix[j][i]);
            }
            result.push(row);
        }
        return result;
    }

    const handlemChange = (e) => {
        setm(e.target.value);
        setMatrix(makeMatrix(e.target.value, n));
        setResult([]);
    }

    const handlenChange = (e) => {
        setn(e.target.value);
        setMatrix(makeMatrix(m, e.target.value));
        setResult([]);
    }

    const handleMatrixChange = (e) => {
        let matrix = [...matrix];
        let row = e.target.name.split(",")[0];
        let column = e.target.name.split(",")[1];
        matrix[row][column] = e.target.value;
        setMatrix(matrix);
    }

    const handleTran = () => {
        setResult(matrixTranspose(matrix));
    }

    const handleClear = () => {
        setMatrix(makeMatrix(m, n));
        setResult([]);
    }

    return (
        <div className="matrix">
            <h1>Matrix Transpose</h1>
                <div className="matrix-input">
                    <div className="matrix-input__row">
                        <label htmlFor="m">m</label>
                        <select name="m" id="m" value={m} onChange={handlemChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <label htmlFor="n">n</label>
                        <select name="n" id="n" value={n} onChange={handlenChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="matrix-input__row">
                    <div className="matrix_display_matrix_title">Matrix A</div>
                        <div className="matrix_display_matrix_content">
                            {
                                matrix.map((row, i) => {
                                    return (
                                        <div className="matrix_display_matrix_content_row" key={i}>
                                            {
                                                row.map((column, j) => {
                                                    return (
                                                        <input type="number" name={`${i},${j}`} value={column} onChange={handleMatrixChange} key={j} />
                                                    );
                                                })
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="matrix-input__row">
                        <div className="matrix-input__row__matrix">
                            <h3>Transpose of A</h3>
                            <div className="matrix_display_matrix_content">
                            {
                                result.map((row, i) => {
                                    return (
                                        <div className="matrix_display_matrix_content_row" key={i}>
                                            {
                                                row.map((column, j) => {
                                                    return (
                                                        <input type="number" name={`${i},${j}`} value={column} key={j} readOnly />
                                                    );
                                                })
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                        </div>
                    </div>
                </div>
                <div className="matrix_display_button">
                        <button onClick={handleTran}>Enter</button>
                        <button onClick={handleClear} >Clear</button>
                </div>
        </div>
    );
}