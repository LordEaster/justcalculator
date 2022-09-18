import React, { useEffect, useState } from "react";

import "../../css/styles.scss";
import "../../css/calc/matrix.scss";

export default function MatrixMulti() {

    useEffect(() => {
        document.title = "Matrix Multiplication calculator | JustMaths";
    }, []);

    // make a matrix with given rows and columns by input form and dropdown for rows and columns
    const [m, setm] = useState(2);
    const [k, setk] = useState(2);
    const [n, setn] = useState(2);
    const [matrixA, setMatrixA] = useState([]);
    const [matrixB, setMatrixB] = useState([]);
    const [result, setResult] = useState([]);

    const makeMatrixA = (m, k) => {
        let matrix = [];
        for (let i = 0; i < m; i++) {
            let row = [];
            for (let j = 0; j < k; j++) {
                row.push(0);
            }
            matrix.push(row);
        }
        return matrix;
    }

    const makeMatrixB = (k, n) => {
        let matrix = [];
        for (let i = 0; i < k; i++) {
            let row = [];
            for (let j = 0; j < n; j++) {
                row.push(0);
            }
            matrix.push(row);
        }
        return matrix;
    }

    const matrixMulti = (matrixA, matrixB) => {
        let result = [];
        for (let i = 0; i < matrixA.length; i++) {
            let row = [];
            for (let j = 0; j < matrixB[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < matrixA[0].length; k++) {
                    sum += parseInt(matrixA[i][k]) * parseInt(matrixB[k][j]);
                }
                row.push(sum);
            }
            result.push(row);
        }
        return result;
    }

    const handlemChange = (e) => {
        setm(e.target.value);
        setMatrixA(makeMatrixA(e.target.value, k));
        setMatrixB(makeMatrixB(k, n));
        setResult(matrixMulti(makeMatrixA(e.target.value, k), makeMatrixB(k, n)));
    }

    const handlekChange = (e) => {
        setk(e.target.value);
        setMatrixA(makeMatrixA(m, e.target.value));
        setMatrixB(makeMatrixB(e.target.value, n));
        setResult(matrixMulti(makeMatrixA(m, e.target.value), makeMatrixB(e.target.value, n)));
    }

    const handlenChange = (e) => {
        setn(e.target.value);
        setMatrixB(makeMatrixB(k, e.target.value));
        setResult(matrixMulti(makeMatrixA(m, k), makeMatrixB(k, e.target.value)));
    }

    const handleMatrixAChange = (e) => {
        let matrix = [...matrixA];
        let row = e.target.name.split(",")[0];
        let column = e.target.name.split(",")[1];
        matrix[row][column] = e.target.value;
        setMatrixA(matrix);
    }

    const handleMatrixBChange = (e) => {
        let matrix = [...matrixB];
        let row = e.target.name.split(",")[0];
        let column = e.target.name.split(",")[1];
        matrix[row][column] = e.target.value;
        setMatrixB(matrix);
    }

    const handleMulti = (e) => {
        e.preventDefault();
        setResult(matrixMulti(matrixA, matrixB));
    }

    const handleClear = (e) => {
        e.preventDefault();
        setMatrixA(makeMatrixA(m, k));
        setMatrixB(makeMatrixB(k, n));
        setResult([]);
    }

    return (
        <div className="matrix">
                        <div className="matrix">
                <div className='matrixA_setting'>Matrix A
                    <div className="matrix_setting_row">
                        <label htmlFor="m">m</label>
                        <select name="m" id="m" value={m} onChange={handlemChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="matrix_setting_column">
                        <label htmlFor="k">k</label>
                        <select name="k" id="k" value={k} onChange={handlekChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className='matrixB_setting'>Matrix B
                    <div className="matrix_setting_row">
                        <label htmlFor="k">k</label>
                        <select name="k" id="k" value={k} onChange={handlekChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="matrix_setting_column">
                        <label htmlFor="n">n</label>
                        <select name="n" id="n" value={n} onChange={handlenChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="matrix_display">
                    <div className="matrix_display_matrix">
                        <div className="matrix_display_matrix_title">Matrix A</div>
                        <div className="matrix_display_matrix_content">
                            {
                                matrixA.map((row, i) => {
                                    return (
                                        <div className="matrix_display_matrix_content_row" key={i}>
                                            {
                                                row.map((column, j) => {
                                                    return (
                                                        <input type="number" name={`${i},${j}`} value={column} onChange={handleMatrixAChange} key={j} />
                                                    );
                                                })
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="matrix_display_matrix">
                        <div className="matrix_display_matrix_title">Matrix B</div>
                        <div className="matrix_display_matrix_content">
                            {
                                matrixB.map((row, i) => {
                                    return (
                                        <div className="matrix_display_matrix_content_row" key={i}>
                                            {
                                                row.map((column, j) => {
                                                    return (
                                                        <input type="number" name={`${i},${j}`} value={column} onChange={handleMatrixBChange} key={j} />
                                                    );
                                                })
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="matrix_display_matrix">
                        <div className="matrix_display_matrix_title">Result</div>
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
                    <div className="matrix_display_button">
                        <button onClick={handleMulti}>Enter</button>
                        <button onClick={handleClear} >Clear</button>

                    </div>
                </div>
            </div>
        </div>
    );
}