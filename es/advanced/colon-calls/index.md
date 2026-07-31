---
title: Llamadas con dos puntos
---

{% include menu.html %}

Cuando llamas a un método o una subrutina, normalmente pones sus argumentos entre paréntesis: `@a.grep(* > 5)`. Raku ofrece una segunda forma: pon **dos puntos** después del nombre, y todo lo que sigue se convierte en la lista de argumentos, sin paréntesis:

```raku
say (1..10).grep: * %% 2; # (2 4 6 8 10)
```

Los dos puntos en `grep:` hacen el mismo trabajo que los paréntesis: `(1..10).grep: * %% 2` significa exactamente `(1..10).grep(* %% 2)`. Las dos formas son intercambiables:

```raku
say <a b c>.join('-'); # a-b-c
say <a b c>.join: '-'; # a-b-c
```

La forma con dos puntos es más agradable con métodos que reciben un **bloque** o una expresión [Whatever](/es/advanced/whatever), porque elimina un nivel de anidamiento. Compara:

```raku
my @a = 3, 1, 2;

say @a.sort({ $^b <=> $^a }); # parentesis alrededor del bloque
say @a.sort: { $^b <=> $^a }; # dos puntos — sin parentesis de cierre que emparejar
```

Ambas imprimen `(3 2 1)`, pero la versión con dos puntos se lee más limpiamente, especialmente cuando el bloque es largo.

Esta es la contraparte en llamadas a métodos de la llamada sin paréntesis que ya usas con operadores de lista como `say 1, 2, 3` — allí, `say` toma todo lo que sigue como sus argumentos. La regla que debes recordar es que la forma con dos puntos consume el **resto de la sentencia** como argumentos, así que debe ir al **final** de una cadena de llamadas. Por eso `('a' .. 'z')>>.uc>>.ord.grep: 60 < * < 70` funciona: `grep` es la última llamada, y no hay nada más que encadenar después. Si necesitas seguir llamando más métodos, usa la forma con paréntesis o agrupa las partes de la expresión completa para que quede claro:

```raku
say (('a' .. 'z')».uc».ord.grep: 60 < * < 70)».chr # (A B C D E)
```

Algo a tener en cuenta: no combines los dos puntos **y** paréntesis como `.grep:( ... )`. Esa forma colisiona con la sintaxis de literal de firma `:( ... )` y falla al parsear. Usa o `.grep( ... )` o `.grep: ...` — una u otra, no ambas.

{% include nav.html %}
