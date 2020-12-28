---
title: Type conversion for typed variables
---

{% include menu.html %}

Notice that type constraints are strict enough. For instance, you cannot assign a `Num` value, even if it contains a whole integer, to a variable declared as `Int`:

```raku
my Int $x = 42;
# $x = 42e1; # Error
```

Use one of the methods to cast the value.

```raku
my Int $x = 42;
$x = 42e1.Int;
$x = Int(42e1);
```

{% include nav.html %}
