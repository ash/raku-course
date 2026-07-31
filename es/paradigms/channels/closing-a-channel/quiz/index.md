---
title: Quiz — Cerrar un canal
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.close;
say $c.list.elems;
```

{:.quiz}
0 | 0
0 | 1
1 | 2
0 | espera para siempre

{% include quiz.html %}

<div class="extended-explanation">

`.list` recoge todos los valores que quedan en el canal y acaba porque el canal está cerrado. Se enviaron dos valores, así que `.elems` es `2`. Sin el `.close`, `.list` esperaría para siempre.

</div>

{% include nav.html %}
