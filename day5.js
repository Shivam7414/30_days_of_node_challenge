const path = require('path');

/**
 * Check if a file has the expected extension using the path module.
 * @param {string} filePath - The path of the file to be checked.
 * @param {string} expectedExtension - The expected file extension (including the dot, e.g., '.txt').
 */
function checkFileExtension(filePath, expectedExtension) {
    // Use path.extname to get the actual file extension of the provided file path
    const actualExtension = path.extname(filePath);

    // Compare the actual extension with the expected extension
    if (actualExtension === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`);
    }
}

// Test cases of the checkFileExtension function with different file paths and expected extensions
checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/image.png', '.jpg');