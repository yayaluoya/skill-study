#### remote

git的本地版本库很远程版本库相当于是一个互相镜像的关系。

pull操作是fetch操作和merge操作的组合。

fetch就是把远程某个提交的提交链下载下来。

比如当前分支master 执行 pull origin/master 就相当于把远程版本库的master分支合并到本地版本库的master分支。

push操作就相当于提交一个pullRequest到远程，然后远程执行和本地一样的pull操作。