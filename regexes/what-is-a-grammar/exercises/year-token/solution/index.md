---
title: The solution of ’Year and month‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my regex year  { \d ** 4 }
my regex month { \d ** 2 }

if '2025-06' ~~ / <year> '-' <month> / {
    say $<year>;
    say $<month>;
}
```

🦋 You can find the source code in the file [year-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/year-token.raku).

## Output

```
｢2025｣
｢06｣
```

## Comments

1. Two named regexes are declared, each describing one piece of the date: a four-digit `year` and a two-digit `month`.

1. The pattern combines them with a literal dash between, and each is captured under its own name. Building a larger pattern from small named parts like this is exactly the idea a grammar formalises.

{% include nav.html %}
