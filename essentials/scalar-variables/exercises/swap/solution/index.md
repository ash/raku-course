---
title: Solution of ’Swap the values‘
---

{% include menu.html %}

In this program, we are using the elements of Raku syntax from the section about [scalar variables](/raku-course/scalar-variables).

## Code

```raku
my ($a, $b) = 10, 20;
($a, $b) = $b, $a;
say "$a, $b";
```

🦋 You can find the source code in the file [swap.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/swap.raku).

## Output

Run the program and confirm it prints the values in different order.

    $ raku exercises/scalar-variables/swap.raku
    20, 10

## Comments

All the steps of this program (creating a variable and assigning the values, swapping them, and printing) use both variables in the same construction. The most interesting here is the way the variables swap their values:

```raku
($a, $b) = $b, $a;
```

Notice that you need parentheses on the left-hand side, but you can also add them on the right-hand side:

```raku
($a, $b) = ($b, $a);
```

What happens if you omit parentheses?

```raku
$a, $b = $b, $a;
```

In this case, you get a warning about that `$a` on the right-hand side is not used.:

    $ raku exercises/scalar-variables/swap.raku
    WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
    Useless use of $a in sink context (lines 2, 2)
    10, 20

The above line is actually equivalent to a useless assignment `$b = $b`. You can easily see it if you modify the values on the right side, for example:

```raku
$a, $b = 2 * $b, 3 * $a;
```

This program prints even more warnings, but you can also see that only `$b` changed its value:

    $ raku exercises/scalar-variables/swap.raku
    WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
    Useless use of "*" in expression "3 * $a" in sink context (line 2)
    Useless use of $a in sink context (line 2)
    10, 40

{% include nav.html %}
