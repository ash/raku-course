---
title: 'Solution: Compare `say` and `put`'
---

{% include menu.html %}

## Code

Here is one of the possible solutions:

```raku
my Int $i = 42;
say $i;
put $i;

my Rat $r = 3/4;
say $r;
put $r;

my Num $n = 3e4;
say $n;
put $n;

my Str $s = 'Raku';
say $s;
put $s;

my @a = <this is an array>;
# say @a.WHAT;
say @a;
put @a;

my List $l = <this is a list>;
# say $l.WHAT;
say $l;
put $l;

my %h = A => 'alpha', B => 'beta';
say %h;
put %h;
```

For better confidence, you can also print the type of the variable, e.g., as shown for arrays and lists, to make sure you have created a variable of the desired type.

🦋 Find the program in the file [compare-say-and-put.raku](https://github.com/ash/raku-course/blob/master/exercises/built-in-functions-for-printing/compare-say-and-put.raku).

## Output

The output of the program shown above is shown below.

```console
$ raku exercises/built-in-functions-for-printing/compare-say-and-put.raku
42
42
0.75
0.75
30000
30000
Raku
Raku
[this is an array]
this is an array
(this is a list)
this is a list
{A => alpha, B => beta}
A	alpha
B	beta
```

## Comments

By examining the output of the program, you can clearly see that there is no difference when printing simple data types such as numbers and strings. For aggregate data types, `say` produces a bit more ’noisy’ output comparing to `put`. On the other side, for hashes, `put` prints it as a table compared to a single line of  `say`.

The difference between the output format is determined by how the `Str` and `gist` methods are implemented for the type in hand. We will talk more about this later in the course.

{% include nav.html %}
