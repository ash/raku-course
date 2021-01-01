---
title: 'Solution: Odd indices'
---

{% include menu.html %}

To solve this task, you can use the `loop` and increment the loop variable by 2 on each iteration. But you can also use a `for` loop and scan the numbers from 1 to the half of the length of array, and then multiply them by two.

## Code

Here is the solution:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21;

say @data[2 * $_] for 1 ..^ @data/2;
```

🦋 Find the program in the file [odd-indices.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/odd-indices.raku).

## Output

First, run the program with the original data elements.

```console
$ raku exercises/positionals/odd-indices.raku
1
-9
36
```

Then, add one more item to the data:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21;
```

Confirm the new element with an odd index appears in the output:

```console
$ raku exercises/positionals/odd-indices.raku
1
-9
36
21
```

## Comments

In the next part of the course, we will return to this task to solve it using a completely different approach.

{% include nav.html %}
