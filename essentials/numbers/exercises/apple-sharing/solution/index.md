---
title: Solution to ‘Apple sharing’
---

{% include menu.html %}

Here is the solution to the problem.

## Code

```raku
my $N = 3;
my $K = 11;

my $gets = $K div $N;
my $remains = $K % $N;

say "Each person gets $gets apple(s).";
say "There are $remains apple(s) remaining.";
```

🦋 You can find the full code in the file [apple-sharing.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/apple-sharing.raku).

## Output

With the input numbers 3 and 11, the program prints the following output:

```console
$ raku exercises/numbers/apple-sharing.raku
Each person gets 3 apple(s).
There are 2 apple(s) remaining.
```

Modify the initial value of `$N` and `$K` to model other situations:

* `$K` is multiple of `$N`, for example, `12` and `3`;
* `$K` is equals to `$N`;
* `$K` is less than `$N`.

## Comments

In the program, we are using the two operators: `div` to perform integer division and `%` for getting the remainder of the division. Alternatively, you can make the calculations in the following manner:

```raku
my $gets = $K div $N;
my $remains = $K - $N * $gets;
```

Also note how the variables are interpolated in the string.

{% include nav.html %}
