---
title: The solution of ’Count up‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $n = 9;

say $n++;
say $n;
```

🦋 You can find the source code in the file [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/count-up.raku).

## Output

```
9
10
```

## Comments

1. `++` is a postfix operator: it comes after its operand. Used as an expression, `$n++` yields the *old* value `9` first — which is what `say` prints — and only then increments the variable.

1. The second line shows that `$n` has indeed become `10`. (The prefix form `++$n` would instead increment first and return `10`.)

{% include nav.html %}
