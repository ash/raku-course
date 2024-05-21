---
title: Funciones MAIN múltiples
---

{% include menu.html %}

Al igual que cualquier otra función en Raku, la función `MAIN` puede tener sus variantes `multi`. Esto permite que el programa reaccione individualmente a un número diferente o a diferentes tipos de parámetros de entrada.

```raku
multi sub MAIN($a) {
    say 2 * $a;
}

multi sub MAIN($a, $b) {
    say $a + $b;
}
```

Este programa duplica su único argumento o lo suma al segundo argumento si está presente:

```console
$ raku t.raku 21
42

$ raku t.raku 21 33
54
```

{% include nav.html %}