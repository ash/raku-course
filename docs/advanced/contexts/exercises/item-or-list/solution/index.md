---
title: The solution of ’Item or list‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @a = 1, 2, 3;
my $count = 0;

my $x = $(@a);
$count++ for @($x);
say $count;
```

🦋 You can find the source code in the file [item-or-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/item-or-list.raku).

## Output

```
3
```

## Comments

1. `my $x = $(@a)` forces item context, so the whole array is packed into the single scalar `$x` rather than spread out.

1. `@($x)` then forces list context, spreading `$x` back into its three elements. The `for` loop therefore runs three times, leaving the counter at `3`. The two contextualisers are exact opposites: `$( )` packs a list into one item, `@( )` unpacks it again.

{% include nav.html %}
