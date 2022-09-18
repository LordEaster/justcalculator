import React, { useEffect, useState } from "react";

import "../../css/styles.scss";
import "../../css/calc/matrix.scss";

export default function MatrixTranspose() {

    useEffect(() => {
        document.title = "Matrix Transpose calculator | JustMaths";
        setMatrixA(makeMatrix(m, n));
    }, []);

    // make a matrix with given rows and columns by input form and dropdown for rows and columns
    const [m, setm] = useState(3);
    const [n, setn] = useState(3);
    const [matrixA, setMatrixA] = useState([]);
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

    const matrixTran = (m,n,matrixA) => {
        let result = [];
        for (let i = 0; i < n; i++) {
            let row = [];
            for (let j = 0; j < m; j++) {
                row.push(parseInt(matrixA[j][i]));
            }
            result.push(row);
        }
        return result;
    }

    const handleMatrixChange = (e) => {
        let matrix = [...matrixA];
        let row = e.target.name.split(",")[0];
        let column = e.target.name.split(",")[1];
        matrix[row][column] = e.target.value;
        setMatrixA(matrix);
    }

    const handlemChange = (e) => {
        setm(e.target.value);
        setMatrixA(makeMatrix(e.target.value, n));
    }

    const handlenChange = (e) => {
        setn(e.target.value);
        setMatrixA(makeMatrix(m, e.target.value));
    }

    const handleTran = () => {
        setResult(matrixTran(m,n,matrixA));
    }

    const handleClear = () => {
        setMatrixA(makeMatrix(m, n));
        setResult(makeMatrix(n, m));
    }

    return (
        <div className="content" id="content">
           <h1 className="text-center">Matrix Transpose</h1>
            <div className="item">
                <div className='matrix_setting'>
                <label className='label'>Matrix Size</label>
                <label className='label'>m x n</label>
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
                <div className="matrix_display-tran">
                    <div className="matrixA">
                        <div className="matrix_content">
                        <div className="title">Matrix</div>
                            {
                                matrixA.map((row, i) => {
                                    return (
                                        <div className="matrix_row" key={i}>
                                            {
                                                row.map((column, j) => {
                                                    return (
                                                        <input type="number" placeholder={`a-${i+1}-${j+1}`} name={`${i},${j}`} value={column} onChange={handleMatrixChange} key={j} />
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
                    <div className="matrix_button">
                        <button className='btn btn-success' onClick={handleTran}>Enter</button>
                        <button className='btn btn-secondary' onClick={handleClear} >Clear</button>
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
                                                        <input placeholder={`${i+1}-${j+1}`} type="number" name={`${i},${j}`} value={column} key={j} readOnly />
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
        </div>
    );
}