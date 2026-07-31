---
title: 'Solución: Un map con hyper'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say <apple banana pear cherry>.hyper.map(*.uc).grep(*.chars > 4).join(' ');
```

🦋 Puedes encontrar el código fuente en el archivo [hyper-map.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-map.raku).

## Salida

```
APPLE BANANA CHERRY
```

## Comentarios

1. `.hyper` ejecuta la cadena entera — el `map` que pasa a mayúsculas y el `grep` que filtra por longitud — repartida entre hilos, en paralelo.

1. Como `.hyper` preserva el orden, las palabras supervivientes se quedan en su secuencia original, así que `.join(' ')` produce `APPLE BANANA CHERRY`. `pear`, con solo cuatro letras, se descarta.

{% include nav.html %}
