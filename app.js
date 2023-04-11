const express = require('express');
const app = express();

// Route for calculating the mean
app.get('/mean', (req, res) => {
  const nums = req.query.nums;
  // Check if nums parameter exists
  if (!nums) {
    return res.status(400).json({ error: 'nums are required' });
    
  }
  // Convert comma-separated string of numbers to an array of numbers
  const numList = nums.split(',').map(Number);
  // Check if any of the values are NaN
  if (numList.includes(NaN)) {
    return res.status(400).json({ error: `${numList.find(num => isNaN(num))} is not a number` });
    
  }
  // Calculate the mean and send the response
  const mean = numList.reduce((a, b) => a + b, 0) / numList.length;
  res.json({ operation: 'mean', value: mean });
});

// Route for calculating the median
app.get('/median', (req, res) => {
  const nums = req.query.nums;
  // Check if nums parameter exists
  if (!nums) {
    return res.status(400).json({ error: 'nums are required' });
    
  }
  // Convert comma-separated string of numbers to an array of numbers
  const numList = nums.split(',').map(Number);
  // Check if any of the values are NaN
  if (numList.includes(NaN)) {
    return res.status(400).json({ error: `${numList.find(num => isNaN(num))} is not a number` });
    
  }
  // Sort the array of numbers and calculate the median
  numList.sort((a, b) => a - b);
  const medianIndex = Math.floor(numList.length / 2);
  const median =
    numList.length % 2 === 0
      ? (numList[medianIndex] + numList[medianIndex - 1]) / 2
      : numList[medianIndex];
  // Send the response
  return res.json({ operation: 'median', value: median });
});

// Route for calculating the mode
app.get('/mode', (req, res) => {
  const nums = req.query.nums;
  // Check if nums parameter exists
  if (!nums) {
    return res.status(400).json({ error: 'nums are required' });
    
  }
  // Convert comma-separated string of numbers to an array of numbers
  const numList = nums.split(',').map(Number);
  // Check if any of the values are NaN
  if (numList.includes(NaN)) {
    return res.status(400).json({ error: `${numList.find(num => isNaN(num))} is not a number` });
    
  }
  // Create a map of each number and its frequency in the array
  const modeMap = {};
  let maxCount = 0;
  let mode;
  numList.forEach((num) => {
    if (!modeMap[num]) modeMap[num] = 1;
    else modeMap[num]++;
    // Update the mode if a new value is more frequent
    if (modeMap[num] > maxCount) {
      mode = num;
      maxCount = modeMap[num];
    }
  });
  // Send the response
  return res.json({ operation: 'mode', value: mode });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});


