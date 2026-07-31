---
title: Metaoperadores zip
translations_gpt:
---

{% include menu.html %}

El meta-operador zip `Z` toma dos (o más) listas y empareja sus elementos por posición:

```raku
say (1, 2, 3) Z (4, 5, 6); # ((1 4) (2 5) (3 6))
```

El resultado es una lista de grupos: el primer elemento de cada lista juntos, luego el segundo de cada una, y así sucesivamente.

De forma más ingeniosa, puedes combinar `Z` con un operador para actuar sobre cada par. Por ejemplo, `Z+` suma los elementos posición por posición:

```raku
say (1, 2, 3) Z+ (10, 20, 30); # (11 22 33)
```

Este es el meta-operador zip envolviendo al operador `+`: calcula `1 + 10`, `2 + 20` y `3 + 30`. De la misma manera, `Z*` multiplica los elementos correspondientes:

```raku
say (1, 2, 3) Z* (10, 20, 30); # (10 40 90)
```

Y `Z~` concatena las cadenas correspondientes:

```raku
say <a b c> Z~ <1 2 3>; # (a1 b2 c3)
```

{% include nav.html %}
