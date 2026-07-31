---
title: Emparejar texto literal
translations_gpt:
---

{% include menu.html %}

El patrón más sencillo es una secuencia de letras y dígitos. Un patrón así empareja exactamente esos caracteres, en ese orden, en cualquier punto de la cadena:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
say 'Hello'       ~~ /ell/; # ｢ell｣
```

La coincidencia no tiene por qué empezar al principio de la cadena: el motor de regex busca el patrón en cada posición hasta encontrarlo.

Una coincidencia lograda produce un objeto `Match`. Ese `｢cat｣` del primer ejemplo es el aspecto que tiene un objeto así al imprimirse: `say` muestra un `Match` como el texto que emparejó, envuelto en las esquinas `｢ ｣`. Si el patrón no está presente, la coincidencia falla: el emparejamiento inteligente produce `Nil`, un valor no definido que cuenta como falso en una prueba booleana:

```raku
say ('the cat sat' ~~ /dog/);       # Nil
say ('the cat sat' ~~ /dog/).Bool;  # False
```

Dentro de un regex, los espacios **no** son significativos por omisión: están ahí solo para hacer legible el patrón. Así que `/ ell /` empareja exactamente lo mismo que `/ell/`; los espacios de alrededor simplemente se ignoran:

```raku
say 'Hello' ~~ / ell /; # ｢ell｣
```

Como un espacio del patrón se ignora, emparejar un espacio *de verdad* requiere **comillas**: todo lo que pongas entre comillas se empareja literalmente. Esas mismas comillas son también la forma de emparejar un signo de puntuación que de otro modo tendría un significado especial en un regex:

```raku
say 'a b'       ~~ / 'a b' /; # ｢a b｣
say 'price: $5' ~~ / '$' /;   # ｢$｣
```

(Para los espacios en blanco también puedes usar la clase `\s`, que conocerás enseguida.)

{% include nav.html %}
