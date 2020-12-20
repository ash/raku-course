---
title: Solution of ‘Apple sharing’
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Numbers](/raku-course/numbers) / [Exercises](/raku-course/numbers/exercises) / [Apple sharing](..)

# The solution of ‘Apple sharing’

Here is the solution of the problem:

    my $N = 3;
    my $K = 11;

    my $gets = $K div $N;
    my $remains = $K % $N;

    say "Each person gets $gets apple(s).";
    say "There are {$remains} apple(s) remaining.";

🦋 You can find the full code in the file [apple-sharing.raku](https://github.com/ash/raku-course/blob/master/numbers/exercises/apple-sharing/solution/apple-sharing.raku).

## Output

With the input numbers 3 and 11, the program prints the following output:

    $ raku apple-sharing.raku
    Each person gets 3 apple(s).
    There are 2 apple(s) remaining.

Modify the initial value of `$N` and `$K` to model other situations:

* `$K` is multiple of `$N`, for example, `12` and `3`;
* `$K` is equals to `$N`;
* `$K` is less than `$N`.

## Comments

In the program, we are using the two operators: `div` to perform integer division and `%` for getting the remainder of the division. Alternatively, you can make the calculations in the following manner:


    my $gets = $K div $N;
    my $remains = $K - $N * $gets;

Or even using standard division and explicit conversion to `Int`, in which case it is equivalent to rounding the number down.

    my $gets = ($K / $N).Int;
    my $remains = $K - $N * $gets;

## Next exercise

| [Apple sharing](apple-sharing) →

## Course navigation

← [Numbers](/raku-course/numbers) / [Operations with numbers](/raku-course/numbers/operations) | [Code blocks](/raku-course/code-blocks) →
