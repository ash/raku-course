---
title: 'Solution: Divising via subtraction'
---

{% include menu.html %}

Division is a repeated subtraction. The program has a `while` loop that diminishes `$a` by the value of `$b` and repeat it while the current value of `$a` is not less than `$b`. The variable `$n` counts the number of iterations, and it is also the result that we need.

## Code

Here is the full program:

```raku
my $a = 175;
my $b = 25;

my $n = 0;
while $a >= $b {
    $a -= $b;
    $n++;
}

say $n;
```

🦋 Find the program in the file [division-via-subtraction.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/exercises/division-via-subtraction.raku).

## Output

Run the program a few times. Start with the given values which give an exact integer:

```console
$ raku exercises/loops/division-via-subtraction.raku
7
```

Also try, for example, to change `$b` to `20` and confirm that the result is correct:

```console
$ raku exercises/loops/division-via-subtraction.raku
8
```

{% include nav.html %}
