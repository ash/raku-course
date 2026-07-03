---
title: The solution of ’Match by type‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $value = 3.14;

given $value {
    when Int { say 'integer' }
    when Rat { say 'rational' }
    when Str { say 'string' }
}
```

🦋 You can find the source code in the file [match-by-type.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/match-by-type.raku).

## Output

```
rational
```

## Comments

1. When the value to match is a type, the smart match asks whether the topic *is of that type*. `3.14` is not an `Int`, so the first `when` is skipped.

1. A decimal literal like `3.14` is a `Rat` (a rational number) in Raku, so the second `when` matches and the program prints `rational`.

{% include nav.html %}
