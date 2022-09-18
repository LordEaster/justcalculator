import React, { useEffect, useState } from "react";

import "../../css/styles.scss";
import "../../css/calc/matrix.scss";

export default function MatrixSub() {

    useEffect(() => {
        document.title = "Matrix Subtraction calculator | JustMaths";
    }, []);

    // make a matrix with given rows and columns by input form and dropdown for rows and columns
    const [rows, setRows] = useState(2);
    const [columns, setColumns] = useState(2);
    const [matrixA, setMatrixA] = useState([]);
    const [matrixB, setMatrixB] = useState([]);
    const [result, setResult] = useState([]);

    const makeMatrix = (rows, columns) => {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < columns; j++) {
                row.push(0);
            }
            matrix.push(row);
        }
        return matrix;
    }

    const matrixSub = (matrixA, matrixB) => {
        let result = [];
        for (let i = 0; i < matrixA.length; i++) {
            let row = [];
            for (let j = 0; j < matrixA[i].length; j++) {
                row.push(parseInt(matrixA[i][j]) - parseInt(matrixB[i][j]));
            }
            result.push(row);
        }
        return result;
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

    const handleRowsChange = (e) => {
        setRows(e.target.value);
        setMatrixA(makeMatrix(e.target.value, columns));
        setMatrixB(makeMatrix(e.target.value, columns));
        setResult(makeMatrix(e.target.value, columns));
    }

    const handleColumnsChange = (e) => {
        setColumns(e.target.value);
        setMatrixA(makeMatrix(rows, e.target.value));
        setMatrixB(makeMatrix(rows, e.target.value));
        setResult(makeMatrix(rows, e.target.value));
    }

    const handleSub = (e) => {
        setResult(matrixSub(matrixA, matrixB));
    }

    const handleClear = (e) => {
        setMatrixA(makeMatrix(rows, columns));
        setMatrixB(makeMatrix(rows, columns));
        setResult(makeMatrix(rows, columns));
    }

    return (
        <div className="matrix">
            <div className="matrix">
                <div className='matrix_setting'>
                    <div className="matrix_setting_row">
                        <label htmlFor="rows">Rows</label>
                        <select name="rows" id="rows" value={rows} onChange={handleRowsChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="matrix_setting_column">
                        <label htmlFor="columns">Columns</label>
                        <select name="columns" id="columns" value={columns} onChange={handleColumnsChange}>
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
                        <button onClick={handleSub}>Enter</button>
                        <button onClick={handleClear} >Clear</button>

                    </div>
                </div>
            </div>
        </div>
    );
}