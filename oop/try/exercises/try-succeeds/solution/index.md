---
title: The solution of ’When nothing goes wrong‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $r = try { 21 * 2 };

say $r.defined;
say $r;
```

🦋 You can find the source code in the file [try-succeeds.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-succeeds.raku).

## Output

```
True
42
```

## Comments

1. When the `try` block runs without an exception, it simply evaluates to the value of the block.

1. So `$r` holds `42`, and `$r.defined` is `True`.

{% include nav.html %}
