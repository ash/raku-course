---
title: 'Solution: The last digit'
---

{% include menu.html %}

The idea of the solution of this task is to use modulo division by 10 to get the last digit of the number.

## Code

Here is the solution:

```raku
my $n = prompt 'Enter a number: ';
my $d = $n % 10;
say "The last digit of $n is $d.";
```

🦋 Find the program in the file [the-last-digit.raku](https://github.com/ash/raku-course/blob/master/essentials/numbers/exercises/the-last-digit.raku).

## Output

Run the program and enter a positive integer:

```console
$ raku exercises/numbers/the-last-digit.raku
Enter a number: 1234
The last digit of 1234 is 4.
```

## Comment

Note that this does not work as expected with negative numbers, as, for example, `-11 % 10` is `9`, not `1`.

{% include nav.html %}
