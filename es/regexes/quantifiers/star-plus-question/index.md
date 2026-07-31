---
title: Asterisco, más e interrogación
translations_gpt:
---

{% include menu.html %}

Tres símbolos cubren los casos más comunes. Cada uno se aplica al elemento que lo precede inmediatamente:

* `*` — cero o más veces
* `+` — una o más veces
* `?` — cero o una vez (opcional)

El signo más empareja una serie de uno o más caracteres:

```raku
say 'aaah' ~~ / a+ /; # ｢aaa｣
```

Emparejó tantas `a` como pudo: tres.

El asterisco es como el más, pero también funciona cuando no hay nada que emparejar, porque se admiten cero repeticiones:

```raku
say 'colour' ~~ / colou*r /; # ｢colour｣
say 'color'  ~~ / colou*r /; # ｢color｣
```

El signo de interrogación hace opcional una pieza: empareja tanto si la pieza está como si no:

```raku
say 'colour' ~~ / colou?r /; # ｢colour｣
say 'color'  ~~ / colou?r /; # ｢color｣
```

Los cuantificadores se aplican a lo que venga inmediatamente antes, clases de caracteres incluidas. Por ejemplo, `\d+` empareja una serie de uno o más dígitos, es decir, un número entero:

```raku
say 'order 66' ~~ / \d+ /; # ｢66｣
```

{% include nav.html %}
