---
title: The solution of ’The value of a do block‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $label = do if 7 > 5 { 'big' } else { 'small' };

say $label;
```

🦋 You can find the source code in the file [do-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/do-block.raku).

## Output

```
big
```

## Comments

1. A bare `if` is a statement and has no usable value. The `do` prefix turns the whole `if`/`else` into an expression.

1. Since `7 > 5` is true, the expression yields `'big'`, which is assigned to `$label`. The same trick works with `do given` and `do for`.

1. The `{ }` braces are not optional. Raku's `if` always takes a block, so you cannot shorten the branches to `if 7 > 5 'big' else 'small'` — that fails to compile with *Missing block*.

{% include nav.html %}
