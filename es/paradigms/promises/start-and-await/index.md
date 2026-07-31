---
title: start y await
translations_gpt:
---

{% include menu.html %}

La palabra clave `start` ejecuta un bloque en segundo plano y devuelve de inmediato una `Promise`:

```raku
my $p = start { 2 + 2 };
```

El trabajo ocurre en el pool de hilos de Raku mientras tu programa sigue adelante. Para obtener el resultado, usa `await`, que espera a que la promesa termine y te da su valor:

```raku
my $p = start { 2 + 2 };
say await $p; # 4
```

`await` se bloquea justo lo necesario para que la promesa se complete, y después devuelve lo que produjera el bloque: aquí, `4`. Si el trabajo ya está hecho cuando esperas, obtienes el resultado enseguida.

Esta pareja — `start` para lanzar, `await` para recoger — es el núcleo de la concurrencia basada en promesas. Puedes lanzar varios trabajos, dejarlos correr al mismo tiempo y esperar sus resultados cuando estés listo, que es exactamente sobre lo que construye el apartado siguiente.

{% include nav.html %}
