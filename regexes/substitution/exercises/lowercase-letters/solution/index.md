---
title: The solution of ’Lower-case letters‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $s = 'RAKU';
$s ~~ tr/A..Z/a..z/;
say $s;
```

🦋 You can find the source code in the file [lowercase-letters.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/lowercase-letters.raku).

## Output

```
raku
```

## Comments

1. `tr///` maps each character in the first range to the character at the same position in the second.

1. Here the ranges run from the uppercase letters to the lowercase ones, so every uppercase letter is replaced by its lowercase partner — the opposite direction to upper-casing.

{% include nav.html %}
