---
title: The reduction metaoperator
---

{% include menu.html %}

Wrap any infix operator in square brackets and it becomes a _reduction_: it is inserted between every element of a list, collapsing the list to one value.

```raku
say [+] 1, 2, 3, 4, 5; # 15
say [*] 1, 2, 3, 4, 5; # 120
```

`[+]` sums the list as if you had written `1 + 2 + 3 + 4 + 5`; `[*]` multiplies it. The same works with any infix operator:

```raku
say [max] 4, 9, 2, 7; # 9
say [min] 4, 9, 2, 7; # 2
say [~] 'a', 'b', 'c'; # abc
```

`[max]` reduces with the `max` operator to find the largest element, and `[~]` reduces with the string-concatenation operator `~` to glue the pieces together.

The reduction metaoperator works on any list, including a range:

```raku
say [+] 1..100; # 5050
```

It is one of Raku’s most compact and expressive features: a whole loop’s worth of accumulation in a pair of brackets.

{% include nav.html %}
