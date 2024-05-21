---
title: Conversión de tipos para variables tipadas
---

{% include menu.html %}

Las restricciones de tipo son bastante estrictas. Por ejemplo, no puedes asignar un valor `Num`, incluso si contiene un número entero, a una variable declarada como `Int`:

```raku
my Int $x = 42;
# $x = 42e1; # Error
```

Usa [uno de los métodos](/es/essentials/coercion/#topics-in-this-section) para convertir el valor.

```raku
my Int $x = 42;
$x = 42e1.Int;
$x = Int(42e1);
```

{% include nav.html %}