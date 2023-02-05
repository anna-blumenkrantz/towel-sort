
// You should implement your task here.

module.exports = function towelSort (matrix) {
    // Check if matrix has been passed as a parameter
  if (!matrix) {
    return [];
  }
  let result = [];
  
  // Loop through each row of the matrix
  for (let i = 0; i < matrix.length; i++) {
    // Check if the current row is defined and has elements
    if (!matrix[i] || !matrix[i].length) {
      continue;
    }
    // Loop through each element in the current row
    for (let j = 0; j < matrix[i].length; j++) {
      // Calculate the column index based on the current row and iteration
      let columnIdx = i % 2 === 0 
        ? j
        : (matrix[i].length - j - 1);

      // Push the current element to the result array
      result.push(matrix[i][columnIdx]);
    }
  }
  return result;
}