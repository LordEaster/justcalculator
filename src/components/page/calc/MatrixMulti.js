import React, { useEffect, useState } from "react";

import "../../css/styles.scss";
import "../../css/calc/matrix.scss";

export default function MatrixMulti() {

    useEffect(() => {
        document.title = "Matrix Multiplication calculator | JustMaths";
        setMatrixA(makeMatrix(m, k));
        setMatrixB(makeMatrix(k, n));
    }, []);

    // make a matrix with given rows and columns by input form and dropdown for rows and columns
    const [m, setm] = useState(3);
    const [k, setk] = useState(3);
    const [n, setn] = useState(3);
    const [matrixA, setMatrixA] = useState([]);
    const [matrixB, setMatrixB] = useState([]);
    const [result, setResult] = useState([]);

    const makeMatrix = (m, n) => {
        let matrix = [];
        for (let i = 0; i < m; i++) {
            let row = [];
            for (let j = 0; j < n; j++) {
                row.push('');
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
        setMatrixA(makeMatrix(e.target.value, k));
        setMatrixB(makeMatrix(k, n));
        setResult(matrixMulti(makeMatrix(e.target.value, k), makeMatrix(k, n)));
    }

    const handlekChange = (e) => {
        setk(e.target.value);
        setMatrixA(makeMatrix(m, e.target.value));
        setMatrixB(makeMatrix(e.target.value, n));
        setResult(matrixMulti(makeMatrix(m, e.target.value), makeMatrix(e.target.value, n)));
    }

    const handlenChange = (e) => {
        setn(e.target.value);
        setMatrixB(makeMatrix(k, e.target.value));
        setResult(matrixMulti(makeMatrix(m, k), makeMatrix(k, e.target.value)));
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
        setResult(matrixMulti(matrixA, matrixB));
    }

    const handleClear = (e) => {
        setMatrixA(makeMatrix(m, k));
        setMatrixB(makeMatrix(k, n));
        setResult(matrixMulti(matrixA, matrixB));
    }

    return (
        <div className="content" id="content">
            <h1 className="text-center">Matrix Multiplication</h1>
                        <div className="item">
                        <div className='matrix_setting'>
                <label className='label'>Matrix A Size</label>
                <label className='label'>m x k</label>
                <div className='matrix_setting_mn'>
                    <div className="matrix_setting_row">
                        <select class= "form-select" name="m" id="m" value={m} onChange={handlemChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    x
                    <div className="matrix_setting_column">
                        <select class= "form-select" name="k" id="k" value={k} onChange={handlekChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                </div>
                <div className='matrix_setting'>
                <label className='label'>Matrix B Size</label>
                <label className='label'>k x n</label>
                <div className='matrix_setting_mn'>
                    <div className="matrix_setting_row">
                        <select class= "form-select" name="k" id="k" value={k} onChange={handlekChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    x
                    <div className="matrix_setting_column">
                        <select class= "form-select" name="n" id="n" value={n} onChange={handlenChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                </div>
                <div className="outter-display">
                <div className="matrix_display">
                    <div className="matrixA">
                        <div className="matrix_content">
                        <div className="title">Matrix A</div>
                            {
                                matrixA.map((row, i) => {
                                    return (
                                        <div className="matrix_row" key={i}>
                                            {
                                                row.map((column, j) => {
                                                    return (
                                                        <input type="number" placeholder={`a-${i+1}-${j+1}`} name={`${i},${j}`} value={column} onChange={handleMatrixAChange} key={j} />
                                                    );
                                                })
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="matrixB">
                        <div className="matrix_content">
                        <div className="title">Matrix B</div>
                            {
                                matrixB.map((row, i) => {
                                    return (
                                        <div className="matrix_row" key={i}>
                                            {
                                                row.map((column, j) => {
                                                    return (
                                                        <input type="number" placeholder={`b-${i+1}-${j+1}`} name={`${i},${j}`} value={column} onChange={handleMatrixBChange} key={j} />
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
                    <div className="matrix_button">
                        <button className="btn btn-success" onClick={handleMulti}>Enter</button>
                        <button className="btn btn-secondary" onClick={handleClear} >Clear</button>

                    </div>
                    <div className="result">
                        <div className="title">Result</div>
                        <div className="matrix_content">
                            {
                                result.map((row, i) => {
                                    return (
                                        <div className="matrix_row" key={i}>
                                            {
                                                row.map((column, j) => {
                                                    return (
                                                        <input type="number" placeholder={`${i+1}-${j+1}`} name={`${i},${j}`} value={column} key={j} readOnly />
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
    );
}