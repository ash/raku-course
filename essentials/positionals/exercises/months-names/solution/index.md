---
title: 'Solution: Months names'
---

{% include menu.html %}

In this program, the names of the months are taken from the array `@months` with twelve strings in it. As array indices start with 0, we need to decrement the input number by 1 before subscripting the array.

## Code

Here is the solution:

```raku
my @months = <
    January February March April
    May June July August
    September October November December
>;

say @months[@*ARGS[0] - 1];
```

🦋 Find the program in the file [months-names.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/months-names.raku).

## Output

Try a few runs of the program to see different names of the months.

```console
$ raku exercises/positionals/months-names.raku 5
May

$ raku exercises/positionals/months-names.raku 1
January

$ raku exercises/positionals/months-names.raku 12
December
```

## Style

It is up to you to choose one of the possible ways to format the lists like the one in this program. Compare a few options:

```raku
my @months = <
    January February March April
    May June July August
    September October November December >;
```

Or:

```raku
my @months = < January   February March    April
               May       June     July     August
               September October  November December >;
```

You can also list all the months in a single line.

```raku
my @months = < January February March April May June July August September October November December >;
```

{% include nav.html %}
