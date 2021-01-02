---
title: 'Solution: Function to compute xʸ'
---

{% include menu.html %}

In this program, use the `**` operator to compute the power.

## Code

Here is the solution:

```raku
sub f($x, $y) { $x ** $y }

say f(5, 3);
say f(2, 10);
say f(-4, 5);
```

🦋 Find the program in the file [function-x-to-the-power-of-y.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/function-x-to-the-power-of-y.raku).

## Output

Run the program to confirm it prints correct answers:

```console
$ raku exercises/functions/function-x-to-the-power-of-y.raku
125
1024
-1024
```

## Comment

This function also works with negative powers, for example:

```raku
say f(5, -1);  # 0.2
say f(10, -2); # 0.01
```

{% include nav.html %}
