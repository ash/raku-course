---
title: Excluding the endpoints of a range
---

{% include menu.html %}

To exclude one of the edges or both of them, modify the range creation operator with the `^` character. There are three more operators that can be constructed in such a way. The comments list the numbers that the ranges generate.

```raku
1 ..^ 5;  # 1, 2, 3, 4
1 ^.. 5;  #    2, 3, 4, 5
1 ^..^ 5; #    2, 3, 4
```

In simple cases as shown above, you can omit the spaces around the range operator:

```raku
my $r1 = 1..5;
my $r2 = 1..^5;
```

For a range that start with 0, such as `0..^5`, there exists a shortcut syntax: `^5`.

{% include nav.html %}
