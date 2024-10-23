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
