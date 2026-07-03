---
title: The solution of ’Bind a scalar‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $source = 1;
my $bound := $source;
my $copy = $source;

$source = 9;
say $bound;
say $copy;
```

🦋 You can find the source code in the file [bind-a-scalar.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/bind-a-scalar.raku).

## Output

```
9
1
```

## Comments

1. Binding with `:=` makes `$bound` another name for the same container as `$source`, rather than a copy. So changing `$source` is visible through `$bound`, which prints `9`.

1. Ordinary assignment with `=` copies the value into a separate container, so `$copy` is unaffected by the later change and still prints `1`.

1. Seeing the two side by side is the whole point: `:=` shares a container, `=` duplicates the value.

{% include nav.html %}
