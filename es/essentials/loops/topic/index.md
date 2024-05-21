---
title: Variable de tema
---

{% include menu.html %}

`$_` es una variable especial llamada _variable de tema_.

Considera el bucle sobre un rango:

```raku
for 1..5 -> $n {
    say $n;
}
```

La variable `$n` puede ser omitida, en cuyo caso será reemplazada por una variable generada automáticamente `$_`. El programa es equivalente a lo siguiente:

```raku
for 1..5 {
    say $_;
}
```

Como [recuerdas](/es/essentials/hello-world/), es posible usar `say` como un método:

```raku
for 1..5 {
    $_.say;
}
```

Llamar métodos en `$_` no requiere mencionar la variable en sí. Así que, nuestro bucle puede ser simplificado aún más:

```raku
for 1..5 {
    .say;
}
```

{% include nav.html %}