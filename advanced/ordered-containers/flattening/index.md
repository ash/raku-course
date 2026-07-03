---
title: Flattening and itemisation (itemization)
---

{% include menu.html %}

When you put one array inside another, Raku does _not_ automatically merge their elements. Examine the following program:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;
my @c = @a, @b;

say @c.elems; # 2
say @c;       # [[1 2 3] [4 5]]
```

The array `@c` has only two elements: the arrays `@a` and `@b`. Raku keeps each container as a single item rather than spilling its contents into the outer array. The same happens for a value placed among others:

```raku
my @a = 1, 2, 3;
my @d = 0, @a, 99;
say @d; # [0 [1 2 3] 99]
```

When you actually want a single flat sequence, ask for it explicitly with the `flat` routine:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat(@a, @b);       # (1 2 3 4 5)
say flat(@a, @b).elems; # 5
```

## Itemisation (Itemization)

Sometimes you want the opposite: to protect a container from being flattened, even inside `flat`. The `$(...)` construct _itemises_ its argument — it marks the result as a single item. Compare the previous example with this one:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat($(@a), @b); # ([1 2 3] 4 5)
```

Here, `$(@a)` keeps `@a` as one element, while `@b` is still flattened into its two values. This is the `$` sigil idea once more: a `$` means “treat this as a single thing”.

{% include nav.html %}
