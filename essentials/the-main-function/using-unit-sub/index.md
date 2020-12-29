---
title: Using unit sub
---

{% include menu.html %}

The `unit sub` construct is a handy way to make the rest of the file the body of the function! When used with `MAIN` that expands to the whole program file, it allows to get rid of the curly braces that embrace virtually the whole file, as well as of unnesessary indentation.

The usage of `unit sub` is demonstrated in the following example of a program.

```raku
unit sub MAIN($a, $b);

my $sum = $a + $b;
say "The sum of $a and $b is $sum.";
```

The `MAIN` funciton is the only function in this file. If this is the case for your program, consider using `unit sub MAIN` as shown above.

{% include nav.html %}
