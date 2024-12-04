//? Version Control -> Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. So ideally, we can place any file in the computer on version control.
//* A Version Control System (VCS) allows you to revert files back to a previous state, revert the entire project back to a previous state, review changes made over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more. Using a VCS also means that if you screw things up or lose files, you can generally recover easily. And sometimes you just want to know “who wrote this crap”, and having access to that information is worthwhile ?


//? What is a Repository ?
//* A repository a.k.a. repo is nothing but a collection of source code.

//? There are four fundamental elements in the Git Workflow.
//! Working Directory, Staging Area, Local Repository and Remote Repository.


//? git add  -> to add a file that is in the working directory to the staging area.
//? git commit -> to add all files that are staged to the local repository.
//? git push -> to add all committed files in the local repository to the remote repository. 
//* So in the remote repository, all files and changes will be visible to anyone with access to the remote repository.
//? git fetch -> is a command used to get files from the remote repository to the local repository but not into the working directory.
//? git merge -> is a command used to get the files from the local repository into the working directory.
//? git pull -> is command used to get files from the remote repository directly into the working directory. It is equivalent to a git fetch and a git merge.
//? git remote -> this command lets you create, view, and delete connections to other repositories
//? git remote -v   -> this command lists the URLs of the remote connections you have to other repositories
//? git diff ->  To show the files changes not yet staged
//? git checkout .  -> Revert back to the last committed version to the Git Repo
//* $ git checkout .
//* OR for a specific file
//* $ git checkout -- <filename>
//? git log -> this command is used to see the history of commit you made to your files




//! Each time you make changes that you want to be reflected on GitHub, the following are the most common flow of commands:
//todo  $ git add .
//todo  $ git status # Lists all new or modified files to be committed
//todo  $ git commit -m "Second commit"
//todo  $ git push -u origin master



//? .gitignore  -> tells git which files (or patterns) it should ignore. It's usually used to avoid committing transient files from your working directory that aren't useful to other collaborators, such as compilation products, temporary files IDEs create, etc.