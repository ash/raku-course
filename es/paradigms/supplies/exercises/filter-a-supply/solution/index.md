---
title: 'Solución: Filtre un supply'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out;
```

🦋 Puedes encontrar el código fuente en el archivo [filter-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/filter-a-supply.raku).

## Salida

```
[2 4 6]
```

## Comentarios

1. `grep(* %% 2)` produce un supply nuevo que solo deja pasar los valores pares, igual que `grep` filtra una lista.

1. El enganche recoge esos valores en `@out`, dando `[2 4 6]`.

{% include nav.html %}
