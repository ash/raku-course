---
title: Sized types and overflow
---

{% include menu.html %}

Besides the plain `int`, Raku has integers of a fixed bit width: `int8`, `int16`, `int32`, `int64`, and their unsigned partners `uint8`, `uint16`, `uint32`, `uint64`. The number is how many bits the value occupies.

A fixed width means a fixed range. An `int8` holds values from `-128` to `127`; a `uint8` holds `0` to `255`. Because the storage cannot grow, going past the top wraps around to the bottom — this is _overflow_:

```raku
my int8 $i = 127;
$i++;
say $i; # -128
```

Adding one to the largest `int8` does not produce `128` (which would not fit); it wraps to the smallest value, `-128`. Unsigned types wrap too:

```raku
my uint8 $u = 255;
$u++;
say $u; # 0
```

This is the opposite of a normal `Int`, which simply grows as large as needed and never overflows. The trade-off is the whole point of sized natives: you accept a fixed range in return for predictable, compact, fast storage.

Use a sized native type when you know the range of your data and want the efficiency — for example, bytes of binary data in a `uint8` array. For ordinary arithmetic where numbers may grow without bound, stick with `Int`.

{% include nav.html %}
