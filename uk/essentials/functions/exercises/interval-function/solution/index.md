---
title: 'Solution: Interval function'
---

{% include menu.html %}

In this function, a three-branch `if` construct is used. The first two branches have a Boolean test, but the third check is not needed as it is the only remaining option if the number did not pass either of the first two tests.

## Code

Here is the solution:

```raku
sub f($x) {
    if    $x > 0  { return $x - 0.5 }
    elsif $x == 0 { return 0 }
    else          { return -$x }
}

say f(-2);
say f(0);
say f(3);
```

🦋 Find the program in the file [interval-function.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/interval-function.raku).

## Output

```console
$ raku exercises/functions/interval-function.raku
2
0
2.5
```

{% include nav.html %}