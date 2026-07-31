---
title: Supplies en vivo
translations_gpt:
---

{% include menu.html %}

Un supply _en vivo_ difunde los valores según ocurren a los enganches que estén escuchando **en ese momento**. Creas uno con un `Supplier`: el supplier es el extremo emisor, y su `.Supply` es el extremo receptor que otros enganchan.

```raku
my $supplier = Supplier.new;
my $supply   = $supplier.Supply;

my @got;
$supply.tap(-> $v { @got.push($v) });

$supplier.emit(1);
$supplier.emit(2);

say @got; # [1 2]
```

Aquí `.emit` empuja un valor al supply en vivo, y todos los enganches actuales lo reciben. El enganche estaba puesto antes de las emisiones, así que capturó ambos valores.

La diferencia crucial respecto de un supply bajo demanda es el momento: un supply en vivo **no** recuerda los valores pasados. Un enganche añadido después de un `emit` se perdería lo que se emitiera antes de suscribirse. Los supplies en vivo son el modelo adecuado para eventos reales — clics, mensajes, lecturas de sensores — donde importa «lo que está pasando ahora» y el pasado ya no está.

En resumen: usa un supply bajo demanda para reproducir una secuencia fija a cada suscriptor, y un supply en vivo (mediante un `Supplier`) para difundir eventos según ocurren.

{% include nav.html %}
