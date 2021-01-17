---
title: 'Solution: If the number is within the limits'
---

{% include menu.html %}

The program uses a range that is created from the numbers that the user enters. Then, the smartmatch check tests if the third number is within the range borders. The result of the smartmatch test is a Boolean value, so we can immediately print it.

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

Test different cases, including when the number coincides with the end of the range.

```console
$ raku exercises/ranges/number-in-limits.raku
From (including): 1
To (excluding): 2
What is the number? 1.5
True

$ raku exercises/ranges/number-in-limits.raku
From (including): 100
To (excluding): 200
What is the number? 100
True

$ raku exercises/ranges/number-in-limits.raku
From (including): -5
To (excluding): -2
What is the number? -2
False
```

## Comment

Note how the right endpoint of the range is excluded: `$begin ..^ $end`.

{% include nav.html %}
