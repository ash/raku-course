---
title: Introspección con `WHAT`
---

{% include menu.html %}

Es posible ver el tipo de dato en una variable llamando al método `WHAT` sobre ella:

```raku
my $n = 42;
my $s = '42';
say $n.WHAT; # (Int)
say $s.WHAT; # (Str)
```

El tipo se imprime entre paréntesis, como se muestra en los comentarios. Por ejemplo, `(Int)` o `(Str)`.

No hay problema en llamar a un método sobre un literal en sí mismo. Por ejemplo:

```raku
say 42.WHAT;      # (Int)
say (-1).WHAT;    # (Int)
say 'Hello'.WHAT; # (Str)
say True.WHAT;    # (Bool)
```

Nota que en el caso de `-1`, ponemos el número entre paréntesis, ya que `say -1.WHAT` intentaría negar el resultado de `1.WHAT`, lo que lleva a una excepción.

{% include nav.html %}