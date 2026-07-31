---
title: El operador de emparejamiento inteligente
translations_gpt:
---

{% include menu.html %}

El operador que aplica un regex a una cadena es el emparejamiento inteligente `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Un patrón escrito entre barras es la forma más común, pero hay dos más que significan lo mismo y a veces resultan más claras:

```raku
say 'the cat sat' ~~ m/cat/;  # ｢cat｣
say 'the cat sat' ~~ rx/cat/; # ｢cat｣
```

La forma `m/.../` recalca que estás _emparejando_, y resulta cómoda cuando quieres añadir opciones a la coincidencia (conocerás esas opciones, llamadas [_adverbios_](/es/regexes/adverbs), más adelante). La forma `rx/.../` construye un valor de regex sin aplicarlo todavía.

Muy a menudo solo te importa si la cadena coincidió, no qué se encontró exactamente. Como una coincidencia lograda es un valor verdadero y una fallida es falsa, puedes usar el resultado directamente en un contexto booleano. La manera más limpia de obtener un `True` o `False` simple es la función `so`:

```raku
say so 'the cat sat' ~~ /cat/; # True
say so 'the cat sat' ~~ /dog/; # False
```

Esto convierte un regex en una condición natural para un `if`:

```raku
if 'the cat sat' ~~ /cat/ {
    say 'found it';   # found it
}
```

{% include nav.html %}
