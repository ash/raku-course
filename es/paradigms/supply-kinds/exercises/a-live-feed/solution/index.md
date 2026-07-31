---
title: 'Solución: Conectarse tarde'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $supplier = Supplier.new;

my @got;
$supplier.emit(1);
$supplier.Supply.tap(-> $v { @got.push($v) });
$supplier.emit(2);
$supplier.emit(3);

say @got;
```

🦋 Puedes encontrar el código fuente en el archivo [a-live-feed.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/a-live-feed.raku).

## Salida

```
[2 3]
```

## Comentarios

1. El `Supplier` es el extremo emisor; su `.Supply` es lo que enganchas. Un supply en vivo difunde solo a los enganches que escuchan **en el momento** de cada emisión.

1. El `emit(1)` ocurre antes de que exista ningún enganche, así que se pierde, como sintonizar una emisora de radio después de que haya sonado una canción. Solo `2` y `3`, emitidos después del enganche, se capturan, dando `[2 3]`.

{% include nav.html %}
