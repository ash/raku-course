---
title: Zip metaoperators
---

{% include menu.html %}

The zip meta-operator `Z` takes two (or more) lists and pairs up their elements by position:

```raku
say (1, 2, 3) Z (4, 5, 6); # ((1 4) (2 5) (3 6))
```

The result is a list of groups: the first element of each list together, then the second of each, and so on.

More ingeniously, you can combine `Z` with an operator to act on each pair. For example, `Z+` adds the elements position by position:

```raku
say (1, 2, 3) Z+ (10, 20, 30); # (11 22 33)
```

This is the zip meta-operator wrapping the `+` operator: it computes `1 + 10`, `2 + 20`, and `3 + 30`. In the same way, `Z*` multiplies corresponding elements:

```raku
say (1, 2, 3) Z* (10, 20, 30); # (10 40 90)
```

And `Z~` concatenates corresponding strings:

```raku
say <a b c> Z~ <1 2 3>; # (a1 b2 c3)
```

{% include nav.html %}
