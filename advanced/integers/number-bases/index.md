---
title: Number bases
---

{% include menu.html %}

An integer literal does not have to be written in the decimal system. Raku understands the three most common alternative bases out of the box, each with its own prefix:

```raku
say 0xFF;   # 255  — hexadecimal (base 16)
say 0b1010; # 10   — binary (base 2)
say 0o17;   # 15   — octal (base 8)
```

Whichever base you use in the source code, the value is the same integer; only the notation differs.

For any other base, use the radix form `:base<number>`:

```raku
say :16<FF>;   # 255
say :2<1010>;  # 10
```

To go the other way — from a number to its representation in another base — call the `base` method. It returns a string of digits:

```raku
say 255.base(16); # FF
say 10.base(2);   # 1010
```

{% include nav.html %}
