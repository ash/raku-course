---
title: 'Solution: Factorial with multi-functions'
---

{% include menu.html %}

This exercise is again about factorial. Indeed, the task allows us to illustrate more interesting features of Raku.

When computing a factorial by starting from the given number downwards, you need to stop when the number gets 1. With multi-functions, you can achieve that by extracting the case with `$n == 1` to a separate multi-function.

## Code

Here is the solution:

```raku
multi factorial(1)  { 1 }
multi factorial($n) { $n * factorial($n - 1) }

say factorial(@*ARGS[0].Int);
```

🦋 Find the program in the file [factorial-with-multi-functions.raku](https://github.com/ash/raku-course/blob/master/exercises/more-on-functions/factorial-with-multi-functions.raku).

## Output

```console
$ raku exercises/more-on-functions/factorial-with-multi-functions.raku 5
120
```

## Comment

Note that the input argument is explicitly converted to an integer: `@*ARGS[0].Int`. This is to prevent infinite loop when the input number is `1`. In this case, the type of the parameter passed to the `factorial` function is [`IntStr`](/raku-course/essentials/data-types/allomorphs), and the first multi-variant is not able to catch the call. In contract, when `factorial(2 - 1)` is called recursively, the argument of the function is integer, which makes it possible to call the first variant.

{% include nav.html %}
