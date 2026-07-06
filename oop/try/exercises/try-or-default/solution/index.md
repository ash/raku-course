---
title: The solution of ’Try or default‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $r = try { die 'no' } // 'default';

say $r;
```

🦋 You can find the source code in the file [try-or-default.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-or-default.raku).

## Output

```
default
```

## Comments

1. The failing `try` block evaluates to an undefined value.

1. The defined-or operator `//` therefore returns its right-hand side, `'default'`, giving a clean way to recover with a fallback in a single line.

{% include nav.html %}
