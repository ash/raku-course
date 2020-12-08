# Running Programs

In [one of the previous section](../hello-world), we created a simple program, but did not run it yet. There are four main ways of running the program: using an installed command-line tool, using a REPL shell, running a program directly from an [IDE](../editors-and-ides) or using an online service such as [glot.io](https://glot.io/new/perl6).

## Running from command line

Save the text of the program into a text file, for example, `hello.raku` and pass the path to the file to the command-line tool `raku` (the dollar character indicates shell’s prompt):

    $ raku hello.raku

If the program does not contain errors, it will be immediately executed, and if it generates any output, you will see the output in the terminal:

    $ raku hello.raku 
    Hello, World!

## Running from REPL

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

## Running from IDE

This section very briefly explain how you start the program without leaving the IDE for the two most recommended [IDEs](../editors-and-ides).

### Visual Studio Code Editor

Open a terminal from the menu `Terminal` → `New Terminal`. It will add a panel below your program text. Run the program as you do it from command line:

    $ raku hello.raku

### Comma IDE

The running facility sits behind the `Run` menu item. Follow [the instructions](https://commaide.com/docs/running) on the Comma website to set the IDE up before the first run of the program.

## Using online services

Online services do not require many explanations. In the case of [glot.io](https://glot.io/new/perl6), paste the text of the program into the online editor and press the `Run` button. You will see the output of the program in a separate area. If there are some errors, you will see them too.
