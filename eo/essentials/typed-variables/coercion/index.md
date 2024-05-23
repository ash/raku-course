---
title: Tipo konvertiĝo por tipitaj variabloj
---

{% include menu.html %}

Tipo limigoj estas sufiĉe striktaj. Ekzemple, vi ne povas asigni `Num` valoron, eĉ se ĝi enhavas tutan entjeron, al variablo deklarita kiel `Int`:

```raku
my Int $x = 42;
# $x = 42e1; # Eraro
```

Uzu [unu el la metodoj](/eo/essentials/coercion/#topics-in-this-section) por gisi la valoron.

```raku
my Int $x = 42;
$x = 42e1.Int;
$x = Int(42e1);
```

{% include nav.html %}