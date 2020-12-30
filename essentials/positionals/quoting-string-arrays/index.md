---
title: Quoting string arrays
---

{% include menu.html %}

For string arrays, where the items are short strings with no spaces, Raku offers a nice syntax for initialising them.

```raku
my @digits = <zero one two three four five six seven eight nine>;
```

It is up to you to decide to add additional spaces around the angle brackets or not. Both options are accepted by the compiler.

```raku
my @digits = < zero one two three four five six seven eight nine >;
```

Both constructions are equivalent to a straightforward variant:

```raku
my @digits = 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine';
```

{% include nav.html %}
