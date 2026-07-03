---
title: Sequence patterns
---

{% include menu.html %}

The `...` operator recognises more than just arithmetic steps.

If you give it three values that grow by multiplication, it continues with a _geometric_ sequence:

```raku
say 1, 2, 4 ... 64; # (1 2 4 8 16 32 64)
```

Here each value is twice the previous one, so the sequence doubles until it reaches `64`.

Sequences are not limited to numbers. With strings, Raku follows the natural alphabetical order:

```raku
say 'a' ... 'e'; # (a b c d e)
```

A sequence can also count downwards. When the endpoint is smaller than the start, the values decrease:

```raku
say 10 ... 1; # (10 9 8 7 6 5 4 3 2 1)
```

In each case you describe the pattern by example, and the `...` operator fills in the rest.

{% include nav.html %}
