---
title: The solution of ’Normalise whitespace‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $messy = '  too    many     spaces   ';

say $messy.trim.subst(/\s+/, ' ', :g);
```

🦋 You can find the source code in the file [normalize-whitespace.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/normalize-whitespace.raku).

## Output

```
too many spaces
```

## Comments

1. `.trim` removes the leading and trailing spaces; the substitution then replaces
every run of whitespace `\s+` with one space.

1. The `:g` adverb makes the substitution global, so *all* the gaps are collapsed,
not just the first.

{% include nav.html %}
