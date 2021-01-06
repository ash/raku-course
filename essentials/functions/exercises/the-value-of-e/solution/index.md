---
title: 'Solution: The value of e'
---

{% include menu.html %}

The formula in this task contains a factorial, and we already have at least two solutions to compute it (more to follow). This program defines two functions: one to compute factorial, another for the partial sum according to the formula.

As it is required that the function can be called with no arguments, in which case it runs a predefined number of iterations, we can add a [default value](/essentials/functions/default-values) of the parameter: `sub e-approx($max = 100)`.

In the code, notice the similarities in how the result values are accumulated in a [postfix `for` loop](/essentials/topic/postfix-for) over a [range](/essentials/positionals/ranges).

## Code

Here is the solution:

```raku
sub factorial($n) {
    my $f = 1;
    $f *= $_ for 1..$n;

    return $f;
}

sub e-approx($max = 100) {
    my $e = 1;
    $e += 1 / factorial($_) for 1..$max;

    return $e;
}

say e-approx(10);
say e-approx();
```

🦋 Find the program in the file [the-value-of-e.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/the-value-of-e.raku).

## Output

With 10 and 100 iterations, we get the following results. Also try other values of `$max`.

```console
$ raku exercises/functions/the-value-of-e.raku
2.7182818
2.718281828459045
```

{% include nav.html %}
