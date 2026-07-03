---
title: Machine-level types
---

{% include menu.html %}

The native types have lower-case names: `int`, `num`, and `str`. You declare a variable with one of them just as you would with `Int` or `Str`:

```raku
my int $i = 42;
my num $n = 3.14e0;
say $i; # 42
say $n; # 3.14
```

A native value corresponds directly to a machine register or word, without the wrapper object that a normal Raku value carries. This makes native types faster and more compact, which matters in tight numeric loops and large arrays.

There is one behaviour to be aware of straight away: a native variable can never be undefined. Where an ordinary `Int` container starts as the undefined `Any`, a native `int` starts at **zero**:

```raku
say (my Int $a); # (Int)
say (my int $b); # 0
```

The same applies to native arrays, declared by putting the native type before the `@` variable:

```raku
my int @numbers = 10, 20, 30;
say @numbers.sum; # 60
```

Such an array stores its elements as raw machine integers rather than as boxed `Int` objects, so it uses less memory. When you introspect a native value it is automatically _boxed_ into the matching full type, which is why `(my int $b).WHAT` reports `(Int)`.

{% include nav.html %}
