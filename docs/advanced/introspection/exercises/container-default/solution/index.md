---
title: The solution of ’The container’s default‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $count is default(0);

say $count;
say $count.VAR.default;
```

🦋 You can find the source code in the file [container-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/container-default.raku).

## Output

```
0
0
```

## Comments

1. The `is default(0)` trait gives the container a default value. Because nothing has been assigned, reading `$count` returns that default, so the first line prints `0`.

1. `.VAR.default` asks the container itself for its declared default, which is also `0`. Without the trait, an untyped container would have defaulted to `(Any)`.

{% include nav.html %}
