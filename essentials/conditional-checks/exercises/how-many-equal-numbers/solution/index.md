---
title: 'Solution: How many equal numbers?'
---

{% include menu.html %}

The program should make a few comparisons. For three input numbers, there are two possible cases:

1. All three numbers are equal,
1. Only two numbers are equal, and
1. All numbers are different.

## Code

Here is the solution with explicit comparisons.

```raku
if @*ARGS[0] == @*ARGS[1] == @*ARGS[2] {
    say 3;
}
elsif @*ARGS[0] == @*ARGS[1] || @*ARGS[1] == @*ARGS[2] || @*ARGS[0] == @*ARGS[2] {
    say 2;
}
else {
    say 0;
}
```

🦋 Find the program in the file [how-many-equal-numbers.raku](https://github.com/ash/raku-course/blob/master/essentials/conditional-checks/exercises/how-many-equal-numbers.raku).

## Output

```console
$ raku exercises/conditional-checks/how-many-equal-numbers.raku 0 0 0
3

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 1 2 3
0

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 1 -2 1
2

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 4 4 4 
3
```

## Comment

Return to this task and solve it again after learning about the reduction operator.

{% include nav.html %}

