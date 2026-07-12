---
title: The solution of ’All the numbers‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @numbers = 'x=5, y=10, z=15' ~~ m:g/\d+/;
say @numbers.map(*.Str).join('+');
```

🦋 You can find the source code in the file [all-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/all-numbers.raku).

## Output

```
5+10+15
```

## Comments

1. `\d+` matches a whole run of digits, and `:g` collects every such run — here `5`, `10`, and `15`.

1. Each match is a match object, so `.map(*.Str)` turns them into plain strings before joining them with `+`.

{% include nav.html %}
