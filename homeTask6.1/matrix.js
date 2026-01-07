const matrix = [
    [0, 4, 0, 2, 0, 0, 7],
    [4, 0, 5, 0, 3, 0, 0], 
    [0, 5, 0, 6, 0, 1, 0], 
    [2, 0, 6, 0, 0, 8, 0], 
    [0, 3, 0, 0, 0, 0, 9],  
    [0, 0, 1, 8, 0, 0, 2],  
    [7, 0, 0, 0, 9, 2, 0]   
]

const result = []
 
for (let i = 0; i < matrix.length; i++) {

    for (let j = i + 1; j < matrix[i].length; j++) {
        const weight = matrix[i][j];

        if (weight > 0) { 
            result.push(`(${i+1}, ${j+1}, ${weight})`);
        }
    }
}
 
console.log(result.join(', '));