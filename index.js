// Import the necessary modules
const fs = require('fs');
const path = require('path');

//=================
// File Operations
//=================

// CREATE (Sync) - Creates a file synchronously
//in sync we have 3 argument - filename, data and 3rd is optional where encoding utf8 is default
function createFileSync(fileName, content) {
    if (!fs.existsSync(fileName)) {
        fs.writeFileSync(fileName, content, 'utf-8');
        console.log(`File '${fileName}' created successfully (Sync).`);
    } else {
        console.log(`File '${fileName}' already exists.`);
    }
}

// CREATE (Async) - Creates a file asynchronously
// similar to sync it takes filename, data, optional and + callback
function createFileAsync(fileName, content) {
    fs.access(fileName, fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFile(fileName, content, 'utf-8', (err) => {
                if (err) throw err;
                console.log(`File '${fileName}' created successfully (Async).`);
            });
        } else {
            console.log(`File '${fileName}' already exists.`);
        }
    });
}

// READ (Sync) - Reads a file synchronously
function readFileSync(fileName) {
    if (fs.existsSync(fileName)) {
        const content = fs.readFileSync(fileName, 'utf-8');
        console.log(`File Content (Sync):\n${content}`);
    } else {
        console.log(`File '${fileName}' does not exist.`);
    }
}

// READ (Async) - Reads a file asynchronously
function readFileAsync(fileName) {
    fs.access(fileName, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`File '${fileName}' does not exist.`);
        } else {
            fs.readFile(fileName, 'utf-8', (err, content) => {
                if (err) throw err;
                console.log(`File Content (Async):\n${content}`);
            });
        }
    });
}

// UPDATE (Sync) - Appends content to a file synchronously
function updateFileSync(fileName, content) {
    if (fs.existsSync(fileName)) {
        fs.appendFileSync(fileName, content, 'utf-8');
        console.log(`File '${fileName}' updated successfully (Sync).`);
    } else {
        console.log(`File '${fileName}' does not exist.`);
    }
}

// UPDATE (Async) - Appends content to a file asynchronously
function updateFileAsync(fileName, content) {
    fs.access(fileName, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`File '${fileName}' does not exist.`);
        } else {
            fs.appendFile(fileName, content, 'utf-8', (err) => {
                if (err) throw err;
                console.log(`File '${fileName}' updated successfully (Async).`);
            });
        }
    });
}

// DELETE (Sync) - Deletes a file synchronously
function deleteFileSync(fileName) {
    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
        console.log(`File '${fileName}' deleted successfully (Sync).`);
    } else {
        console.log(`File '${fileName}' does not exist.`);
    }
}

// DELETE (Async) - Deletes a file asynchronously
function deleteFileAsync(fileName) {
    fs.access(fileName, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`File '${fileName}' does not exist.`);
        } else {
            fs.unlink(fileName, (err) => {
                if (err) throw err;
                console.log(`File '${fileName}' deleted successfully (Async).`);
            });
        }
    });
}

//======================
// Directory Operations
//======================

// CREATE Directory (Sync)
function createDirectorySync(dirName) {
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
        console.log(`Directory '${dirName}' created successfully (Sync).`);
    } else {
        console.log(`Directory '${dirName}' already exists.`);
    }
}

// CREATE Directory (Async)
function createDirectoryAsync(dirName) {
    fs.access(dirName, fs.constants.F_OK, (err) => {
        if (err) {
            fs.mkdir(dirName, (err) => {
                if (err) throw err;
                console.log(`Directory '${dirName}' created successfully (Async).`);
            });
        } else {
            console.log(`Directory '${dirName}' already exists.`);
        }
    });
}

// READ Directory (Sync) - Lists all files and folders in the directory synchronously
function listDirectorySync(dirName) {
    if (fs.existsSync(dirName)) {
        const files = fs.readdirSync(dirName);
        console.log(`Directory Content (Sync):\n${files.join('\n')}`);
    } else {
        console.log(`Directory '${dirName}' does not exist.`);
    }
}

// READ Directory (Async) - Lists all files and folders in the directory asynchronously
function listDirectoryAsync(dirName) {
    fs.access(dirName, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`Directory '${dirName}' does not exist.`);
        } else {
            fs.readdir(dirName, (err, files) => {
                if (err) throw err;
                console.log(`Directory Content (Async):\n${files.join('\n')}`);
            });
        }
    });
}

// DELETE Directory (Sync)
function deleteDirectorySync(dirName) {
    if (fs.existsSync(dirName)) {
        fs.rmdirSync(dirName);
        console.log(`Directory '${dirName}' deleted successfully (Sync).`);
    } else {
        console.log(`Directory '${dirName}' does not exist.`);
    }
}

// DELETE Directory (Async)
function deleteDirectoryAsync(dirName) {
    fs.access(dirName, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`Directory '${dirName}' does not exist.`);
        } else {
            fs.rmdir(dirName, (err) => {
                if (err) throw err;
                console.log(`Directory '${dirName}' deleted successfully (Async).`);
            });
        }
    });
}

//===========================
// Command-line interaction
//===========================
const [, , command, ...args] = process.argv;

switch (command) {
    case 'createFileSync':
        createFileSync(args[0], args[1]);
        break;
    case 'createFileAsync':
        createFileAsync(args[0], args[1]);
        break;
    case 'readFileSync':
        readFileSync(args[0]);
        break;
    case 'readFileAsync':
        readFileAsync(args[0]);
        break;
    case 'updateFileSync':
        updateFileSync(args[0], args[1]);
        break;
    case 'updateFileAsync':
        updateFileAsync(args[0], args[1]);
        break;
    case 'deleteFileSync':
        deleteFileSync(args[0]);
        break;
    case 'deleteFileAsync':
        deleteFileAsync(args[0]);
        break;
    case 'createDirSync':
        createDirectorySync(args[0]);
        break;
    case 'createDirAsync':
        createDirectoryAsync(args[0]);
        break;
    case 'listDirSync':
        listDirectorySync(args[0]);
        break;
    case 'listDirAsync':
        listDirectoryAsync(args[0]);
        break;
    case 'deleteDirSync':
        deleteDirectorySync(args[0]);
        break;
    case 'deleteDirAsync':
        deleteDirectoryAsync(args[0]);
        break;
    default:
        console.log('Unknown Command');
        break;
}
