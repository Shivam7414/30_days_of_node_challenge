const fs = require('fs').promises;

/**
 * Asynchronous function to write content to a file.
 * @param {string} filePath - The path to the file to be written.
 * @param {string} content - The content to be written to the file.
 */
async function writeToFile(filePath, content) {
    try {
        // Asynchronously write content to the specified file
        await fs.writeFile(filePath, content);

        // Log a success message if writing is successful
        console.log(`Data written to ${filePath}`);
    } catch (err) {
        // Log an error message if writing to the file encounters an error
        console.error('Error writing to file:', err.message);
    }
}

// test cases
writeToFile('test-files/output1.txt', 'Sample content.')
    .catch(console.error);

writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.')
    .catch(console.error);