---
title: Clases de caracteres
translations_gpt:
---

{% include menu.html %}

A menudo no quieres emparejar un carácter fijo, sino cualquier carácter de un conjunto. Un conjunto así se llama _clase de caracteres_ y se escribe entre `<[` y `]>`:

```raku
say 'grey' ~~ / gr <[ae]> y /; # ｢grey｣
say 'gray' ~~ / gr <[ae]> y /; # ｢gray｣
```

La clase `<[ae]>` empareja un solo carácter que sea `a` o `e`, así que coinciden las dos grafías del color.

Dentro de los corchetes puedes indicar un _rango_ con dos puntos:

```raku
say 'a1b2' ~~ / <[0..9]> /; # ｢1｣
```

`<[0..9]>` empareja cualquier dígito; el primero de la cadena es `1`.

Para emparejar cualquier carácter que **no** esté en el conjunto, pon un signo menos justo después del corchete de apertura:

```raku
say 'stop!' ~~ / <-[a..z]> /; # ｢!｣
```

Aquí `<-[a..z]>` empareja el primer carácter que no es una letra minúscula, que es el signo de exclamación.

Puedes combinar varias piezas en una misma clase. Por ejemplo, `<[a..z A..Z 0..9]>` empareja una letra o un dígito. Los espacios de ahí son solo por legibilidad: como en todo regex, los espacios dentro de `<[…]>` se ignoran, así que `<[a..zA..Z0..9]>` es exactamente la misma clase.

{% include nav.html %}
