---
title: 'Solution: How many numbers are equal?'
---

{% include menu.html %}

The program should make a few comparisons. For three input numbers, there are two possible cases:

1. All three numbers are equal,
1. Only two numbers are equal, and
1. All numbers are different.

## Code

Here is the solution with explicit comparisons.

```raku
my $n1 = prompt 'Enter number 1: ';
my $n2 = prompt 'Enter number 2: ';
my $n3 = prompt 'Enter number 3: ';

if $n1 == $n2 == $n3 {
    say 3;
}
elsif $n1 == $n2 || $n2 == $n3 || $n1 == $n3 {
    say 2;
}
else {
    say 0;
}
```

🦋 Find the program in the file [how-many-equal-numbers.raku](https://github.com/ash/raku-course/blob/master/essentials/conditional-checks/how-many-equal-numbers.raku).

## Output

```console
$ raku exercises/conditional-checks/how-many-equal-numbers.raku 0 0 0
Enter number 1: 14
Enter number 2: 8
Enter number 3: 8
2

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Enter number 1: 15
Enter number 2: 15
Enter number 3: 15
3

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Enter number 1: 4
Enter number 2: 6
Enter number 3: 8
0
```

## Comments

1. Note that you can compare three numbers in a single expression: `$n1 == $n2 == $n3`.
1. Return to this task and solve it again after learning about the reduction operator.

{% include nav.html %}

