function logNegativeRows(arr: number[][]): Promise<void> {
    // Create an array of promises that resolve when a negative number is found in each row
    const rowPromises = arr.map((row, index) => {
        return new Promise<void>((resolve, reject) => {
            const hasNegative = row.some(num => num < 0); // Check if any number in the row is negative
            if (hasNegative) {
                console.log(`Row ${index} has a negative number:`, row);
            }
            resolve();  // Resolve the promise regardless of whether there is a negative number
        });
    });
    return Promise.all(rowPromises).then(() => {
        console.log('Finished checking all rows.');
    });
}
const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
logNegativeRows(array2D_3).then(() => {
    console.log('Finished logging negative rows.');
});