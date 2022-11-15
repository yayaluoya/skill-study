#!/bin/bash

# 注意这里的$和下文的$是转义了的
echo "Use \$*:"
for arg in "$*"
do
        echo "Hello $arg"
done

echo "Use \$@:"
for arg in "$@"
do
        echo "Hello $arg"
done

# printenv PATH
# echo $name