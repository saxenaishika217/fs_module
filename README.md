# fs_module

This project is a simple Node.js script to handle basic file and directory operations, including Create, Read, Update, and Delete (CRUD) for files and Create, List, and Delete for directories. The script supports both synchronous and asynchronous methods.
Features

  File Operations:
       -> Create a file (synchronously or asynchronously).
       -> Read a file (synchronously or asynchronously).
       -> Update (append) to a file (synchronously or asynchronously).
       -> Delete a file (synchronously or asynchronously).

  Directory Operations:
       -> Create a directory.
       -> List contents of a directory.
       -> Delete a directory.
       
  Commands
  1. createFile <fileName> <content> - Creates a file with the given content.
  2. readFile <fileName> - Reads the content of a file.
  3. updateFile <fileName> <content> - Appends the given content to the file.
  4. deleteFile <fileName> - Deletes the specified file.
  5. create-dir <dirName> - Creates a new directory.
  6. list-dir <dirName> - Lists the contents of a directory.
  7. delete-dir <dirName> - Deletes the specified directory.


  //Commands for files...
  
  1. Creates a file synchronously -- node index.js createFileSync <filename> <content>
  2. Creates a file asynchronously -- node index.js createFileAsync <filename> <content>
  3. Reads a file synchronously -- node index.js readFileSync <filename> 
  4. Reads a file asynchronously -- node index.js readFileAsync <filename> 
  5.UPDATE (Sync) - Appends content to a file synchronously -- node index.js updateFileSync <filename> <content>
  6.UPDATE (Async) - Appends content to a file asynchronously -- node index.js updateFileAsync <filename> <content>
  7.DELETE (Async) - Deletes a file asynchronously -- node index.js deleteFileAsync <filename> 
  8.DELETE (sync) - Deletes a file synchronously -- node index.js deleteFileSync <filename> 

//Commands for directory...

1.CREATE Directory (Sync) --- node index.js createDirSync <dirName>
2.CREATE Directory (Async) --- node index.js createDirAsync <dirName>
3.READ Directory (Sync) --- node index.js listDirSync <dirName>
4.READ Directory (Async) --- node index.js listDirAsync <dirName>
5.DELETE Directory (Sync) --- node index.js deleteFileSync <dirName>
6.DELETE Directory (Async) --- node index.js deleteFileAsync <dirName>
