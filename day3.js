const { exec } = require('child_process');

/**
 * Execute a command using the child_process module.
 * @param {string} command - The command to be executed.
 */
function executeCommand(command) {
    // Use the exec function from child_process to run the specified command
    exec(command, (error, stdout, stderr) => {
        if (error) {
            // Log an error message if the command execution encounters an error
            console.error(`Error executing command: ${error.message}`);
            return;
        }
        if (stderr) {
            // Log an error message if there is an error in the command output
            console.error(`Error in command output: ${stderr}`);
            return;
        }
        // Log the command output to the console
        console.log(`Command Output:\n${stdout}`);
    });
}

// Different commands to test the executeCommand function
executeCommand('dir'); // This code is for Windows
executeCommand('ls -la'); // This code is for Linux or macOS
executeCommand('echo "Hello, Node.js!"');
