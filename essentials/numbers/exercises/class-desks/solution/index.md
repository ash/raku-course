---
title: Solution to ‘Class desks’
---

{% include menu.html %}

The solution to the problem is shown below.

## Code

```raku
my $students = 23;

my $desks = $students div 2 + $students % 2;

say "$desks desks must be bought.";
```

🦋 You can find the full code in the file [class-desks.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/class-desks.raku).

## Output

Run the program at least twice trying both odd and even number of students. For example, for the input numbers `23` and `24`, the program prints the same result:

```console
$ raku exercises/numbers/class-desks.raku
12 desks must be bought.
```

## Comments

It is not enough just to divide the number of students by two. It is important to handle both odd and even numbers. One of the possible solutions to round the number up: `$students div 2 + $students % 2`. When the number of students is even, the second component is zero, and the result is equal to half of the number of students. But when the number of students is odd, the first component is still an integer number due to `div` instead of `/`, and the second term of the expression adds an extra desk.

{% include nav.html %}
