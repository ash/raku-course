---
title: Interpolando hashes
---

{% include menu.html %}

Para interpolar elementos de un array en cadenas de texto con comillas dobles, escríbelos como lo haces en el propio programa: `%data<FR>`. Para interpolar todo el hash, agrega un par de ángulos vacíos o llaves: `@data{}`. El siguiente programa ilustra este enfoque:

```raku
my %data = FR => 'Paris', IT => 'Rome';

say "%data<FR>";
say "%data<>";

# O:
# say "%data{}";
```

Este programa imprime los datos solicitados:

```console
$ raku t.raku
Paris
FR	Paris
IT	Rome
```

Ten en cuenta que imprimir todo el hash puede generar una salida de varias líneas.

{% include nav.html %}