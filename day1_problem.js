/*
Day 1 Problem Statement: Create a function readFileContent(filePath) that takes the path to a file as input and reads its content asynchronously using the fs module. The function should print the content to the console.
*/
const fs = require('fs');
const util = require('util');

// Promisifying the readFile function from fs module
const readFile = util.promisify(fs.readFile);

/**
 * Asynchronous function to read the content of a file and log it to the console.
 * @param {string} filePath - The path to the file to be read.
 */
async function readFileContent(filePath) {
    try {
        // Asynchronously read the file content
        const data = await readFile(filePath, 'utf8');

        // Check if the file is empty and log accordingly
        if (data === '') {
            console.log('(empty string)');
        } else {
            console.log(data);
        }
    } catch (err) {
        // Log an error message if file reading encounters an error
        console.error('Error reading file:', err.message);
    }
}

// Example usage of the readFileContent function with different file paths
readFileContent('test-files/file1.txt')
    .then(() => readFileContent('test-files/empty-file.txt'))
    .then(() => readFileContent('test-files/nonexistent-file.txt'))
    .catch(console.error);
