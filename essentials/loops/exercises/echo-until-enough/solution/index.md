---
title: 'Solution: Echo until enough'
---

{% include menu.html %}

This program requires a loop that is stopped when the user enters a predefined word. 

## Code

There are several similar ways of solving the task with `while`, `until`, or `repeat`. One of them is shown below.

```raku
my $word;
repeat {
    $word = prompt 'Your word: ';
    say $word;
} while $word ne 'enough';

say 'OK, done.';
```

🦋 Find the program in the file [echo-until-enough.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/echo-until-enough.raku).

## Output

Run the program, enter a few different words, and then terminate the loop.

```console
$ raku exercises/loops/echo-until-enough.raku
Your word: this
this
Your word: is
is
Your word: my
my
Your word: word
word
Your word: enough
enough
OK, done.
```

## Comment

Note that you declare the `$word` variable _before_ the loop, as the `while` test is located outside the loop body's scope. If the variable is defined inside the loop, it will not be visible in the test.

{% include nav.html %}
