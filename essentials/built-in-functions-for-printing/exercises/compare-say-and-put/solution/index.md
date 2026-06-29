---
title: 'Solution: Compare `say` and `put`'
---

{% include menu.html %}

## Code

Here is one of the possible solutions:

```raku
my Int $i = 256;
say $i;
put $i;

my Rat $r = 1/8;
say $r;
put $r;

my Num $n = 6.022e23;
say $n;
put $n;

my Str $s = 'camelia';
say $s;
put $s;

my @a = <red green blue>;
# say @a.WHAT;
say @a;
put @a;

my List $l = (10, 20, 30);
# say $l.WHAT;
say $l;
put $l;

my Range $range = 1..5;
say $range;
put $range;

my %h = x => 10, y => 20;
say %h;
put %h;
```

For better confidence, you can also print the type of the variable, e.g., as shown for arrays and lists, to make sure you have created a variable of the desired type.

🦋 Find the program in the file [compare-say-and-put.raku](https://github.com/ash/raku-course/blob/master/exercises/built-in-functions-for-printing/compare-say-and-put.raku).

## Output

The output of the program shown above is shown below.

```console
$ raku exercises/built-in-functions-for-printing/compare-say-and-put.raku
256
256
0.125
0.125
6.022e+23
6.022e+23
camelia
camelia
[red green blue]
red green blue
(10 20 30)
10 20 30
1..5
1 2 3 4 5
{x => 10, y => 20}
x	10
y	20
```

## Comments

By examining the output of the program, you can clearly see that there is no difference when printing simple data types such as numbers and strings. For aggregate data types, `say` produces a bit more ’noisy’ output compared to `put`. On the other side, for hashes, `put` prints it as a table compared to a single line of  `say`. The `Range` is especially interesting: `say` keeps the compact `1..5` form, while `put` expands it into the individual values `1 2 3 4 5`.

The difference between the output format is determined by how the `Str` and `gist` methods are implemented for the type in hand. We will talk more about this later in the course.

{% include nav.html %}
