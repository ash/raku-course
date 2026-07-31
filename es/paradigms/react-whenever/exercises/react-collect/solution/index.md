---
title: 'Solución: Reparta en dos arrays'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @small;
my @big;

react {
    whenever Supply.from-list(4, 42, 7, 100, 15) {
        if $_ > 10 { @big.push($_) }
        else       { @small.push($_) }
    }
}

say @small;
say @big;
```

🦋 Puedes encontrar el código fuente en el archivo [react-collect.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-collect.raku).

## Salida

```
[4 7]
[42 100 15]
```

## Comentarios

1. El cuerpo del `whenever` es código corriente, así que puede hacer más que recoger: aquí **decide**, encaminando cada valor a `@big` o a `@small` según llega. Dentro de cada array los valores conservan su orden en el flujo.

1. El bloque react espera a que el flujo termine, así que ambos arrays están completos antes de imprimirse.

{% include nav.html %}
