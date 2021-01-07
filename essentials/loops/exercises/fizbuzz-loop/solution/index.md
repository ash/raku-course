---
title: 'Solution: FizzBuzz in a loop'
---

{% include menu.html %}

This time, the divisibility check happens in a loop. Instead of direct printing, the phrase is first accumulated in a separate variable and is later interpolated in a string.

## Code

Here is the new solution:

```raku
for 1..50 -> $n {
    my $fizzbuzz = '';
    $fizzbuzz ~= 'Fizz' if $n %% 3;
    $fizzbuzz ~= 'Buzz' if $n %% 5;
    say "$n: $fizzbuzz";
}
```

🦋 Find the program in the file [fizbuzz-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/fizbuzz-loop.raku).

## Output

```console
$ raku exercises/loops/fizbuzz-loop.raku
```

## Comment

For a pedantic problem solver, the solution may not be perfect as it prints a space after the colon even for those numbers, which did not get any Fizz of Buzz. Modify the program to avoid that issue.

{% include nav.html %}
