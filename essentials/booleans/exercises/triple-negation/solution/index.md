---
title: Solution to ‘Triple negation’
---

{% include menu.html %}

The program shown in the task won’t compile and requires a small fix. Here is the correct and working variant (space added to separate `!` and `!!`):

## Code

```raku
my $value = False;
say ! !!$value;
```

🦋 You can find the full code in the file [triple-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/triple-negation.raku).

## Output

The program prints an inverted Boolean value as you probably expected:

```console
$ raku triple-negation.raku
True
```

## Comments

It was a bit unexpected the program with three exclamation marks did not compile:

```console
$ raku triple-negation.raku
===SORRY!=== Error while compiling /Users/ash/raku-course/exercises/booleans/triple-negation.raku
Two terms in a row
at /Users/ash/raku-course/exercises/booleans/triple-negation.raku:2
------> say !!!⏏$value;
    expecting any of:
        infix
        infix stopper
        postfix
        statement end
        statement modifier
        statement modifier loop
```

An additional space solves this problem. But don’t fall into another trap. Consider the following program:

```raku
my $value = False;
say !!! $value;
```

This program compiles but terminates with the following message:

```console
$ raku triple-negation.raku
False
    in block <unit> at exercises/booleans/triple-negation.raku line 2
```

This happens because `!!!` is a special operator for marking the part of the code as stub code. It the program reaches this point, it terminates and prints the message, which in our case was the current value of the variable `$value`. Refer to 📖 [the documentation](https://docs.raku.org/routine/!!!) for more details.

{% include nav.html %}
