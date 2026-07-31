---
title: 'Solución: Sume un flujo en vivo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $supplier = Supplier.new;

my $total = 0;
$supplier.Supply.tap(-> $v { $total += $v });

$supplier.emit(10);
$supplier.emit(20);
$supplier.emit(30);

say $total;
```

🦋 Puedes encontrar el código fuente en el archivo [live-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/live-sum.raku).

## Salida

```
60
```

## Comentarios

1. Cada `.emit` entrega un valor al enganche, que lo suma a `$total`.

1. Tras las tres emisiones el total es `10 + 20 + 30`, es decir `60`.

{% include nav.html %}
