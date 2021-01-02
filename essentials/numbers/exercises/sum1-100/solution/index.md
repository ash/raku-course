---
title: Solution of ‘Sum of numbers from 1 to 100’
---

{% include menu.html %}

To compute a sum of integer numbers from 1 to 100, it is, of course, add all those numbers in a single big expression. Or create a loop (we’ll cover loops in the further sections). But the best solution is to use a well known [formula](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_⋯):

<div class="formula"><img src="sum.png" style="height: 3.5em; width: auto" /></div>

Having this known, the solution is rather trivial.

## Code

```raku
my $N = 100;
my $sum = $N * (1 + $N) / 2;
say "The sum of the numbers from 1 to $N is $sum.";
```

🦋 You can find the full code in the file [sum1-100.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum1-100.raku).

## Output

```console
$ raku exercises/numbers/sum1-100.raku 
The sum of the numbers from 1 to 100 is 5050.
```

{% include nav.html %}
