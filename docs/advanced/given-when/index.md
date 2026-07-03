---
title: '`given` and `when`'
---

{% include menu.html %}

When a program needs to choose between several alternatives, a chain of `if` and `elsif` checks can become long and repetitive. In that situation, the `given`/`when` construct is often clearer. It is similar to the `switch` statement found in other languages.

The `given` block takes a value and makes it the _topic_ — the special variable `$_`. Each `when` block is then compared against that topic, and the first one that matches runs:

```raku
my $n = 2;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    when 3 { say 'three' }
}
```

This program prints:

```
two
```

Unlike a `switch` in some other languages, there is no fall-through: as soon as a `when` matches, its block runs and the `given` block is finished. The remaining `when` blocks are not tested.

## The `default` block

A `default` block runs when none of the `when` blocks matched. It plays the same role as the `else` branch of an `if` statement:

```raku
my $n = 5;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    default { say 'many' }
}
```

Because `$n` is neither `1` nor `2`, the program prints:

```
many
```

{% include nav.html %}
