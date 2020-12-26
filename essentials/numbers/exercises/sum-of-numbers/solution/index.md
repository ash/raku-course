---
title: Solution of ‘Sum of numbers’
---

{% include menu.html %}

Here is the solution of the problem.

## Code

    my $a = prompt 'Enter number A: ';
    my $b = prompt 'Enter number A: ';
    my $c = prompt 'Enter number A: ';

    my $sum = $a + $b + $c;

    say "The sum of numbers is $sum.";

🦋 You can find the full code in the file [sum-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum-of-numbers.raku).

## Output

Run the program a few times and confirm it works with the numbers of different kinds.

    $ raku exercises/numbers/sum-of-numbers.raku
    Enter number A: 1.2
    Enter number B: -3.4
    Enter number C: 45
    The sum of the numbers is 42.8.

## Comments

Notice that we are directly using the value returned by the `prompt` routine. This may cause problems if the user enters a string that does not represent a value. We can make the program better in the future after we learn about exceptions.

{% include nav.html %}
