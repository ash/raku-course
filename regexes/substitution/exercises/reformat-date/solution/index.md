---
title: The solution of ’Reformat a date‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $d = '2025-06-15';
$d ~~ s/ (\d+) '-' (\d+) '-' (\d+) /$2\/$1\/$0/;
say $d;
```

🦋 You can find the source code in the file [reformat-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/reformat-date.raku).

## Output

```
15/06/2025
```

## Comments

1. The pattern captures the year into `$0`, the month into `$1`, and the day into `$2`.

1. The replacement writes them in the new order `$2/$1/$0`, with the slashes escaped as `\/`. The replacement side has no surrounding spaces, because spaces there would be inserted literally.

{% include nav.html %}
