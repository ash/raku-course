---
title: The solution of ’Common elements‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $a = set(<apple banana cherry>);
my $b = set(<banana cherry date>);

my $common = $a ∩ $b;
say $common.elems;
say 'apple' ∈ $common;
```

🦋 You can find the source code in the file [common-elements.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/common-elements.raku).

## Output

```
2
False
```

## Comments

1. The intersection `$a ∩ $b` is itself a set — here `{banana, cherry}` — so it has `2` elements. If you prefer ASCII, write `(&)` instead of `∩`.

1. Because the intersection is a set, you can ask it the membership question with `∈`. `apple` is only in the first set, so it is not in the intersection, and the test returns `False`.

{% include nav.html %}
