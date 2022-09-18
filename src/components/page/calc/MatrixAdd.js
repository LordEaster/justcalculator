import React, { useEffect ,useState } from 'react';

import '../../css/styles.scss';
import '../../css/calc/matrix.scss';

export default function MatrixAdd() {

    useEffect(() => {
        document.title = "Matrix Addition calculator | JustMaths";
    }, []);

    // make a matrix with given rows and columns by input form and dropdown for rows and columns
    const [m, setm] = useState(2);
    const [n, setn] = useState(2);
    const [matrixA, setMatrixA] = useState([]);
    const [matrixB, setMatrixB] = useState([]);
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

    const matrixAdd = (matrixA, matrixB) => {
        let result = [];
        for (let i = 0; i < matrixA.length; i++) {
            let row = [];
            for (let j = 0; j < matrixA[i].length; j++) {
                row.push(parseInt(matrixA[i][j]) + parseInt(matrixB[i][j]));
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

    const handlemChange = (e) => {
        setm(e.target.value);
        setMatrixA(makeMatrix(e.target.value, n));
        setMatrixB(makeMatrix(e.target.value, n));
    }

    const handlenChange = (e) => {
        setn(e.target.value);
        setMatrixA(makeMatrix(m, e.target.value));
        setMatrixB(makeMatrix(m, e.target.value));
    }

    const handleAdd = () => {
        setResult(matrixAdd(matrixA, matrixB));
    }

    const handleClear = () => {
        setMatrixA(makeMatrix(m, n));
        setMatrixB(makeMatrix(m, n));
        setResult(makeMatrix(m, n));
    }
                  
    return (
        <div className='content' id='content'>
            <div className="item">
                
                <div className='matrix_setting'>Matrix Size
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
                    </div>
                    <div className="matrix_display_button">
                        <button onClick={handleAdd}>Enter</button>
                        <button onClick={handleClear} >Clear</button>
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
            </div>
        </div>  
    );
}