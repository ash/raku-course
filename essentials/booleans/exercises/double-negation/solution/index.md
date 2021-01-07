---
title: Solution to 'Double negation’
---

{% include menu.html %}

Let us extend the program to solve the second part of the exercise and reuse the same variable:

## Code

```raku
my $value = False;
say !!$value;

$value = True;
say !!$value;
```

🦋 You can find the full code in the file [double-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/double-negation.raku).

## Comments

Before running the program, let us think what it will print. There are two negation operators before the variable. They act as two negation operators. In the first case, the value is flipped from `False` to `True`, and then immediately flipped back from `True` to `False`. In the second case, the algorithm is the same: after two negations, we get the initial Boolean value.

## Output

The program prints the following output, which confirms the above considerations:

```console
$ raku exercises/booleans/double-negation.raku
False
True
```

{% include nav.html %}
