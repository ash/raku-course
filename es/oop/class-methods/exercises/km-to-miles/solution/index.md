---
title: 'Solución: De kilómetros a millas'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Converter {
    method km-to-miles($km) {
        $km * 0.621;
    }
}

say Converter.km-to-miles(10);
```

🦋 Puedes encontrar el código fuente en el archivo [km-to-miles.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/km-to-miles.raku).

## Salida

```
6.21
```

## Comentarios

1. La conversión no depende de ningún objeto concreto, así que se escribe como método de clase y se llama directamente sobre `Converter`.

1. Un método de clase sí puede recibir parámetros: aquí recibe el número de kilómetros y devuelve las millas.

{% include nav.html %}
