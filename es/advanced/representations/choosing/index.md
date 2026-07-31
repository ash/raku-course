---
title: Eligiendo el correcto
---

{% include menu.html %}

Para escalares comunes como números y cadenas, las tres representaciones se ven iguales. Empiezan a diferir con valores compuestos o indefinidos. Aquí tienes un `Pair` mostrado de tres formas:

```raku
say (foo => 1).gist; # foo => 1
say (foo => 1).Str;  # foo	1
say (foo => 1).raku; # :foo(1)
```

Una regla general aproximada:

* [`.gist`](../gist) — para salida destinada a ser *leída* por una persona (`say`, `note`).
* [`.Str`](../str) — para salida que es *texto plano* (`print`, `put`, interpolación, el operador `~`).
* [`.raku`](../raku-method) — para una representación *similar a código* durante la depuración (`dd`).

Cada uno de estos métodos puede recibir tu propia definición cuando escribes una clase, de modo que tus propios objetos también se impriman de forma legible. Volveremos a esto cuando [creemos clases](/es/oop/classes) en la siguiente parte.

{% include nav.html %}
