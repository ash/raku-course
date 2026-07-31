---
title: 'Solution: Una cadena cruda'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
say Q{$x and \n};
```

🦋 Encuentra el programa en el archivo [raw-string.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/raw-string.raku).

## Salida

```
$x and \n
```

## Comentarios

1. `Q` es la forma de entrecomillado más literal: no interpola nada y no procesa ninguna secuencia de escape.

1. Por lo tanto, `$x` permanece como texto y `\n` permanece como una barra invertida y una `n`.

{% include nav.html %}
