---
title: Running from REPL
---

{% include menu.html %}

REPL stands for _Read–eval–print loop_. It is a built-in shell mode where you can type instructions and get intermediate results on the screen, including the state of the variables and the output that your program generates.

To start Rakudo shell, simply type:

```console
$ raku
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2026.06.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2026.06.

You may want to `zef install Readline` or `zef install Linenoise` or use rlwrap for a line editor

To exit type 'exit' or '^D'
> 
```

The output may depend on the currently installed version of the compiler. In the above output, the shell recommends installing some modules for better user experience, so you see the corresponding message.

At the end, there’s a prompt character `>` where you can type in your program or its parts. The shell will compile it line by line as soon as you press Enter.

    > say 'Hello, World';
    Hello, World
    > 

{% include nav.html %}
