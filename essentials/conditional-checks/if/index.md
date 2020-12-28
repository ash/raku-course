---
title: Conditional checks with if
---

{% include menu.html %}

The `if` conditional check test a condition and if it is `True`, runs a block of code.

```raku
if 10 > 4 {
    say 'Mathematics works!';
}
```

Notice that you don’t need to put the condition in parentheses (but you can if you wish). 

Of course, variables are more than welcome in the tests:

```raku
my $flag = False;
if $flag {
    # . . . do something
}
```

In the case there are more than one check that uses the same variable, it is possible to use chained comparisons:

```raku
my $x = 42;
if 40 < $x < 45 {
    say "Correct answer $x is given.";
}
```

If the condition is not satisfied, the associated block of code is not executed, and the program flow continues.

```raku
say 'Begin';
if False {
    say 'This is never printed.';
}
say 'End';
```

This program just prints `Begin` and `End`.;

{% include nav.html %}
