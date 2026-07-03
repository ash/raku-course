---
title: Searching in strings
---

{% include menu.html %}

Several methods answer questions about what a string contains.

The `contains` method tells whether one string appears anywhere inside another:

```raku
say 'Raku'.contains('ak'); # True
say 'Raku'.contains('xy'); # False
```

The `starts-with` and `ends-with` methods check the beginning and the end of a string:

```raku
say 'Raku'.starts-with('Ra'); # True
say 'Raku'.ends-with('ku');   # True
```

When you need the exact position of a substring, use `index`. It returns the index of the first match, counting from zero:

```raku
say 'Raku'.index('k'); # 2
```

If the substring is not found, `index` returns `Nil` rather than a number:

```raku
say 'Raku'.index('z'); # Nil
```

{% include nav.html %}
