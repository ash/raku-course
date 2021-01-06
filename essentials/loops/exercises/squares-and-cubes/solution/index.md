---
title: 'Solution: Squares and cubes in a loop'
---

{% include menu.html %}

You already solved the task to print [the square and the cube of a single number](/essentials/positionals/exercises/square-and-cubes/solution). This time, add a loop.

## Code

Here is the code of the solution. The `for` loop is using a range that spans from `-5` to `5`.

```raku
for -5 .. 5 -> $n {
    say "$n\t{$n²}\t{$n³}";
}
```

🦋 Find the program in the file [squares-and-cubes-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/squares-and-cubes-loop.raku).

## Example

Run the program and check the result. By the way, did you know that _10!_ is the exact number of seconds in six weeks?

```console
$ raku exercises/loops/squares-and-cubes-loop.raku
-5	25	-125
-4	16	-64
-3	9	-27
-2	4	-8
-1	1	-1
0	0	0
1	1	1
2	4	8
3	9	27
4	16	64
5	25	125
```

{% include nav.html %}
