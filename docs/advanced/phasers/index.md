---
title: Phasers
---

{% include menu.html %}

A _phaser_ is a special block that runs automatically at a particular moment in the life of a program, rather than where it appears in the source code. You do not call a phaser; you only say _when_ its code should run, by naming the block.

The most common phasers mark stages of the program as a whole:

* `BEGIN` runs as early as possible, while the program is still being compiled;
* `INIT` runs once at the start of the run, before the main code;
* `END` runs once at the very end, after the main code has finished.

The following program places these phasers among ordinary statements. Notice that the output does not follow the order of the lines in the file:

```raku
say 'main body';
BEGIN say 'BEGIN';
END say 'END';
INIT say 'INIT';
```

The program prints:

```
BEGIN
INIT
main body
END
```

`BEGIN` runs first, during compilation. Then, at run time, `INIT` runs before the main body. The main body prints next, and `END` runs last, no matter where it was written.

A common use of `END` is to print a summary or clean something up just before the program exits, while `BEGIN` is handy for work that must happen before anything else.

{% include nav.html %}
