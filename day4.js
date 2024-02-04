const path = require('path');

/**
 * Resolve a relative path to an absolute path using the path module.
 * @param {string} relativePath - The relative path to be resolved.
 */
function resolvePath(relativePath) {
    // Use the path.resolve method to convert a relative path to an absolute path
    const absolutePath = path.resolve(relativePath);

    // Log the resolved path to the console
    console.log(`Resolved Path: ${absolutePath}`);
}

// Test cases of the resolvePath function with different relative paths
resolvePath('../project/folder/file.txt');
resolvePath('nonexistent-folder/file.txt');