---
title: 'Forma postfija de "for"'
---

{% include menu.html %}

Ya hemos visto otros modificadores de declaración: [`if` y `else`](/es/essentials/conditional-checks/modifiers) y [`while` y `until`](/es/essentials/loops/modifiers). Y esa es la razón para una pequeña celebración, ya que el diseño de Raku es muy consistente.

Con un cuerpo de bucle corto, el bucle `for` se puede escribir en forma postfija:

```raku
.say for 1..7;
```

Como ves, los rangos son muy naturales cuando se usan con la forma postfija de `for`.

Este programa es equivalente a una variante más tradicional:

```raku
for 1..7 -> $n {
    say $n;
}
```

O, si se usa la variable de bucle predeterminada, a:

```raku
for 1..7 {
    .say;
}
```

Aquí, `.say` es la forma corta de `$_.say`.


{% include nav.html %}