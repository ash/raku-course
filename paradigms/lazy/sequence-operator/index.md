---
title: The sequence operator
---

{% include menu.html %}

The sequence operator `...` builds a list from a starting pattern up to an end value. Give it the first few elements and the endpoint, and it works out how the series continues:

```raku
say (2, 4 ... 10); # (2 4 6 8 10)
```

From `2, 4` it infers “add two each time”, and continues until it reaches `10`. The step can be downward too:

```raku
say (10, 8 ... 2); # (10 8 6 4 2)
```

If the elements grow by multiplication rather than addition, the operator notices that as well:

```raku
say (1, 2, 4 ... 64); # (1 2 4 8 16 32 64)
```

Here each term is double the previous one, so the sequence is geometric.

When the rule is more complex than the operator can guess, you can supply it explicitly as a closure of the previous elements. For instance, an explicit “add the step” rule:

```raku
say (1, * + 2 ... 9); # (1 3 5 7 9)
```

The block `* + 2` says how to get the next element from the current one. With this, `...` can express any sequence you can describe by a rule.

{% include nav.html %}
