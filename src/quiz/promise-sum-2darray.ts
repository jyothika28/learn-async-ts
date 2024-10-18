//promise sum 2d array
function sum2DArrayConcurrently(arr: number[][]): Promise<number> {
    // Create an array of promises, each summing a row
    const rowSumPromises = arr.map(row => {
        return new Promise<number>((resolve) => {
            const rowSum = row.reduce((sum, num) => sum + num, 0); 
            // Resolve the promise with the sum of the row
            resolve(rowSum);  
        });
    });

    // Use Promise.all() to sum all rows concurrently
    return Promise.all(rowSumPromises)
        .then(rowSums => {
            // Sum the results of all row sums
            const totalSum = rowSums.reduce((sum, rowSum) => sum + rowSum, 0);
            return totalSum;
        });
}
const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
sum2DArrayConcurrently(array2D_1)
    .then(result => {
        console.log('Total sum of array2D_1:', result); 
    })
    .catch(error => {
        console.error('Error calculating sum:', error);
    });

//using async await
// async function asyncSum2DArray(array2D: number[][]): Promise<number> {  
//     let sum = 0;
//     array2D.forEach((array) => {
//         array.forEach((element) => {
//             sum += element;
//         });
//     });
//     return sum;
// }

// asyncSum2DArray(array2D_1).then((sum) => {
//     console.log(sum);
// });