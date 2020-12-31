---
title: 'Solution: FizzBuzz'
---

{% include menu.html %}

This task is a classical interview task that helps to check if you think of the cases when both conditions are True. In this case, if the number if divisible by both 3 and 5, the program should print `FizzBuzz`.

## Code

Here is the solution:

```raku
my $n = prompt 'Enter a number: ';

print 'Fizz' if $n %% 3;
print 'Buzz' if $n %% 5;
print "\n";
```

🦋 Find the program in the file [fizz-buzz.raku](https://github.com/ash/raku-course/blob/master/exercises/exercises/conditional-checks/fizz-buzz.raku ).

## Example

You need to test a few classes of input data:

* The numbers that are divisible by 3, e.g.: 3, 6, 9, 12.
* The numbers that are divisible by 5, e.g.: 5, 10, 15, 20.
* The numbers that are divisible by 3 and by 5, e.g.: 15, 30, 45.
* Other numbers, which are divisible by neither 3 nor 5, e.g.: 4, 7, 11.

```console
$ raku exercises/conditional-checks/fizz-buzz.raku 
Enter a number: 3
Fizz

$ raku exercises/conditional-checks/fizz-buzz.raku
Enter a number: 10
Buzz

$ raku exercises/conditional-checks/fizz-buzz.raku
Enter a number: 7

$ raku exercises/conditional-checks/fizz-buzz.raku
Enter a number: 30
FizzBuzz
```

{% include nav.html %}
