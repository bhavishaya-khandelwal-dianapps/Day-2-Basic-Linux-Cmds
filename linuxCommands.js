//todo 25 Basic Linux Commands 

//? ls -> lists directory contents, it lists files and directories

//? When you use ls –l you will be able to see more details of the contents in the directory. It lists the following:
//* Permissions associated with the file
//* The owner of the file
//* The group associated with the file
//* The size of the file
//* The timestamp
//* The name of the file

//? cd -> changes the current directory
//* cd ..   -->  Go back to the previous file/folder 


//? grep -> this finds text in a file. The grep command searches through many files at a time to find a piece of text you are looking for
//! Syntax -> grep PATTERN [FILE]
//* grep "failed" transaction.log
//* The above command will find all of the words in the files that matched the word ‘failed’.


//? su/sudo command -> The su command changes the shell so that it is used as a super user. Until you use the exit command, you can continue to be the super user. The sudo command is used when you just need to run something as a super user, you can use the sudo command. This will allow you to run the command in elevated rights and once the command is executed you will be back to your normal rights and permissions.
//* sudo shutdown 2 : shutdown and turns of the computer after 2 minutes.
//* sudo shutdown –r 2 : shuts down and reboots in 2 minutes.
//* Using ctrl C or shutdown –c : helps in stopping the shutdown process.


//? pwd -> One way to identify the directory you are working in is the pwd command. It displays the current working directory path and is useful when directory changes are made frequently.


//? passwd -> This command is used to change the user account password.
//* You could change your password or the password of other users. Note that the normal system users may only change their own password, while root may modify the password for any account.
//* passwd [username]- changes the password for the user.


//? mv -> The mv command moves a file or renames it. Here the file name gets changed from text.txt to first.txt 



//? cp -> This command copies a file. The cp command issues a copy of the file second.txt in the same directory.



//? rm -> This command is used to remove files in a directory or the directory itself.
//* A directory cannot be removed if it is not empty.
//! Syntax -> rm [name of the file]


//? rm –r   ->  removes all the contents in a directory and the directory as well.
//* $ rm file1
//* $ rm -r myproject



//? mkdir  -> The mkdir command makes a directory.
//* The command is written as follows: mkdir [directory name]



//? chmod  -> This command changes the mode of a file system object.
//* Files can have read, write, and execute permissions.
//* chmod mode FILE 
//* chmod 744 script.sh 
//* The first number stands for the user who is associated with the file,                           1st -> user 
//* The second number is for the group associated with the file,                                    2nd -> group
//* The third number is associated with everyone else who is not a part of the user or group        3rd -> everyone else 



//? chown -> This command is used to change the ownership of a file/folder or even multiple files/folders for a specified user/group.
//! Syntax  ->  chown owner_name file_name


//? cat -> The cat command (short for “concatenate”) is one of the most frequently used commands in Linux. 
//* cat command allows you to create single or multiple files,
//* view contents of files,
//* concatenate files (combining files), 
//* and redirect output in terminal or files.



//? echo -> This command is used to display a text or a string to the standard output or a file.
//* The echo –e option acts as an interpretation of escape characters that are back-slashed. \n the newline character is interpreted by the echo –e command.
//* $ echo –e "This is an article is for beginners. \nIt is on basic linux commands"



//? wc -> The wc(word count) command is used to find out the number of new lines, word count, byte, and characters count in a file specified by the file arguments.
//! Syntax -> wc [options] filenames
//* wc -l : Prints the number of lines in a file.
//* wc -w: Prints the number of words in a file.
//* wc -c : Displays the count of bytes in a file.
//* wc -m: Prints the count of characters from a file.
//* wc -L: Prints only the length of the longest line in a file.



//? man -> This command is used to view the online reference manual pages for commands/programs
//* Basically this command helps you to know indepth about every command 
//* For example -> man grep -> This will show you all about grep command 



//? history -> This command is used to show previously used commands or obtain information about the commands executed by a user.


//? clear -> This command clears the terminal screen.


//? apt -get    ->  apt -get is a powerful and free front-end package manager for Debian/Ubuntu systems. 
//* It is used to install new software packages, 
//* remove available software packages, 
//* upgrade existing software packages as well as upgrade the entire operating system. 
//* apt – stands for advanced packaging tool.
//* $ sudo apt-get update


//? reboot -> This command halts, powers off, or reboots a system.



//? locate -> The locate command is used to find a file and runs in the background, unlike the find command.



//? diff -> The diff command compares two files line by line to find differences. 
//* The output will be the lines that are different.



//? useradd -> The useradd command creates a new user. 
//* The username is added after the useradd command, as follows:
//* $ useradd John


//? exit  -> The exit command exits the current shell. When you hit enter, you’ll be taken out of the terminal.


//? kill ->  The kill command is used to end a process, usually an unresponsive one. 
//* The kill command also includes the process ID or the program name, as shown here.



//todo   compgen -c    -> To get a list of all commands that you can run. You’ll see the list of commands one after the other.