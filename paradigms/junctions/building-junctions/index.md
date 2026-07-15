---
title: Building junctions
---

{% include menu.html %}

The simplest way to build a junction is with the junctive operators. The `|` operator makes an _any_ junction:

```raku
my $j = 1 | 2 | 3;
say $j; # any(1, 2, 3)
```

The value `$j` stands for “1 or 2 or 3”. There are four kinds of junction, each with an operator and a matching function:

* `any( … )` or `a | b` — true if **any** value matches
* `all( … )` or `a & b` — true if **all** values match
* `one( … )` or `a ^ b` — true if **exactly one** value matches
* `none( … )` — true if **no** value matches (this is the only kind with no operator form — use the function)

The function forms are handy with a list:

```raku
say all(3, 7, 2);  # all(3, 7, 2)
say none(1, 2, 3); # none(1, 2, 3)
```

A junction is most useful in a comparison. Asking whether a number equals an _any_ junction tests it against every value at once:

```raku
say so 2 == any(1, 2, 3); # True
say so 5 == any(1, 2, 3); # False
```

The operator form reads just as naturally — `1 | 2 | 3` is exactly the same _any_ junction:

```raku
say so 2 == 1 | 2 | 3; # True
say so 5 == 1 | 2 | 3; # False
```

The `so` turns the junctive result into a plain Boolean. The next topic looks at what happens behind the scenes when you do this.

{% include nav.html %}
