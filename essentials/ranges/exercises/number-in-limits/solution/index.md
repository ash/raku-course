---
title: 'Solution: If the number is within the limits'
---

{% include menu.html %}

The program uses a range that is created from the numbers that the user enters. Then, the smartmatch check tests if the third number is withing the range borders.

## Code

Here is the solution:

```raku
my $begin = prompt 'From (including): ';
my $end = prompt 'To (excluding): ';

my $n = prompt 'What is the number? ';

say $n ~~ $begin ..^ $end ??
    'Within the limits.' !! 'Out of limits.';
```

🦋 Find the program in the file [number-in-limits.raku](https://github.com/ash/raku-course/blob/master/exercises/ranges/number-in-limits.raku).

## Output

Test different cases, including when the number coinsides with the end of the range.

```console
$ raku exercises/ranges/number-in-limits.raku
From (including): 1
To (excluding): 2
What is the number? 1.5
Within the limits.

$ raku exercises/ranges/number-in-limits.raku
From (including): 100
To (excluding): 200
What is the number? 100
Within the limits.

$ raku exercises/ranges/number-in-limits.raku
From (including): -5
To (excluding): -2
What is the number? -2
Out of limits.
```

## Comment

Note how the right endpoint of the range is excluded: `$begin ..^ $end`.

{% include nav.html %}
