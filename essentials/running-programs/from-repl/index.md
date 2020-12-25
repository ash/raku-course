---
title: Running from REPL
---

{% include menu.html %}

REPL stands for _Read–eval–print loop_. It is a built-in shell mode where you can type instructions and get intermediate result on the screen, including the state of the variables and the output that your program generates.

To start Rakudo shell, simply type:

    $ raku
    Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
    Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
    Built on MoarVM version 2020.10.

    You may want to `zef install Readline` or `zef install Linenoise` or use rlwrap for a line editor

    To exit type 'exit' or '^D'
    > 

The output may depend on your current installed version of the compiler. In the above output, no package module called `zef` is installed, so you see the corresponding message.

At the end you see the prompt character where you can type in your program or its parts. The shell will compile it line by line as soon as you press Enter.

    > say 'Hello, World';
    Hello, World
    > 

{% include nav.html %}
