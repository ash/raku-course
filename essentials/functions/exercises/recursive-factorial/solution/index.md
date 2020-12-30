---
title: 'Solution: Recursive factorial'
---

{% include menu.html %}

Factorial is a very productive exercise, as it can be solved in a number of different ways. This time we are using recursion, which means that the function is called from itself.

## Code

Here is the code of the solution. Notice that you need to check the condition to stop the recursion, otherwise it will continue infinitely.

```raku
sub factorial($n) {
    if $n < 2 {
        return 1;
    }
    else {
        return $n * factorial($n - 1);
    }
}

say factorial(10);
```

🦋 Find the program in the file [recursive-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/recursive-factorial.raku).

## Example

Run the program and check the result. By the way, did you know that _10!_ is the exact number of seconds in six weeks?

```console
$ raku exercises/functions/recursive-factorial.raku
3628800
```

{% include nav.html %}
