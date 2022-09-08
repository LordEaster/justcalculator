        // calculate matrix subtraction
        function matrixSubtraction(matrix1, matrix2) {
            let result = [];
            for (let i = 0; i < matrix1.length; i++) {
                result[i] = [];
                for (let j = 0; j < matrix1[i].length; j++) {
                    result[i][j] = matrix1[i][j] - matrix2[i][j];
                }
            }
            return result;
        }
        
    // calculate matrix multiplication
    function matrixMultiplication(matrix1, matrix2) {
        let result = [];
        for (let i = 0; i < matrix1.length; i++) {
            result[i] = [];
            for (let j = 0; j < matrix2[0].length; j++) {
                result[i][j] = 0;
                for (let k = 0; k < matrix1[0].length; k++) {
                    result[i][j] += matrix1[i][k] * matrix2[k][j];
                }
            }
        }
        return result;

    }

    // calculate matrix transpose
    function matrixTranspose(matrix) {
        let result = [];
        for (let i = 0; i < matrix[0].length; i++) {
            result[i] = [];
            for (let j = 0; j < matrix.length; j++) {
                result[i][j] = matrix[j][i];
            }
        }
        return result;
    }

    // calculate matrix determinant
    function matrixDeterminant(matrix) {
        if (matrix.length === 1) {
            return matrix[0][0];
        }
        let result = 0;
        for (let i = 0; i < matrix.length; i++) {
            let subMatrix = [];
            for (let j = 1; j < matrix.length; j++) {
                subMatrix[j - 1] = [];
                for (let k = 0; k < matrix.length; k++) {
                    if (k !== i) {
                        subMatrix[j - 1].push(matrix[j][k]);
                    }
                }
            }
            result += matrix[0][i] * Math.pow(-1, i) * matrixDeterminant(subMatrix);
        }
        return result;
    }

    // calculate matrix inverse
    function matrixInverse(matrix) {
        let result = [];
        let det = matrixDeterminant(matrix);
        if (det === 0) {
            return result;
        }
        for (let i = 0; i < matrix.length; i++) {
            result[i] = [];
            for (let j = 0; j < matrix.length; j++) {
                let subMatrix = [];
                for (let k = 0; k < matrix.length; k++) {
                    subMatrix[k] = [];
                    for (let l = 0; l < matrix.length; l++) {
                        if (k !== i && l !== j) {
                            subMatrix[k].push(matrix[k][l]);
                        }
                    }
                }
                result[i][j] = Math.pow(-1, i + j) * matrixDeterminant(subMatrix) / det;
            }
        }
        return matrixTranspose(result);
    }