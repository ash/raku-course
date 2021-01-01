---
title: 'Solution: Echo until enough'
---

{% include menu.html %}

This program requires a loop that is broken when the entered word equals to some predefined word. 

## Code

There are a number of similar ways of solving the task using different choices of `while`, `until`, and `repeat`. One of them is shown below.

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

Note that you declare the `$word` variable _before_ the loop, as its `while` condition is outside of the scope of the loop body. So, if the variable is defined inside the loop, it will not be visible in the check.

{% include nav.html %}
