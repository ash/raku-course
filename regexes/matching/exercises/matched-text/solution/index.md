---
title: The solution of ’The matched text‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
'database' ~~ /base/;
say $/.Str;
```

🦋 You can find the source code in the file [matched-text.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/matched-text.raku).

## Output

```
base
```

## Comments

1. Every smartmatch stores its result in the special match variable `$/`, so there is no need to assign it to a variable of our own.

1. The match object holds the matched text; calling `.Str` on `$/` returns that text as an ordinary string. Printing the match object directly would have shown `｢base｣` instead.

{% include nav.html %}
