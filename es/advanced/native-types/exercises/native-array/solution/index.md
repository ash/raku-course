---
title: 'Solution: Un array nativo'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my uint8 @bytes = 100, 200, 255;
say @bytes.sum;
```

🦋 Encuentra el programa en el archivo [native-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-array.raku).

## Salida

```
555
```

## Comentarios

1. Colocar el tipo nativo con tamaño `uint8` antes del array `@` declara un array donde cada elemento se almacena como un solo byte sin signo — la disposición compacta que se adapta a los datos binarios.

1. El límite de desbordamiento se aplica a cada *elemento* (`0..255`), no al resultado de sumarlos. `.sum` encapsula el total en un `Int` ordinario, así que `100 + 200 + 255` da el `555` completo.

{% include nav.html %}
