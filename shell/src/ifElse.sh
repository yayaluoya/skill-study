#!/bin/bash

cat  <<TIP
你最喜欢的编程语言是？
  1) C++
  2) Java
  3) Python
请输入对应的数字：
TIP

read input_num

case $input_num in
  1 )
    lang="C++"
    echo "C++ 性能优越。"
    ;;
  2 )
  lang="Java"
  echo "Java 神通广大。"
  ;;
  3 )
  lang="Python"
  echo "Python 简单高效。"
  ;;
  * )
  echo "无效输入"
  ;;
esac