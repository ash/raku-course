---
title: Interpolando arreglos
---

{% include menu.html %}

Para interpolar elementos de un arreglo en cadenas de texto con comillas dobles, escríbelo como lo harías en el propio programa: `@data[1]`. Para interpolar todo el arreglo, añade un par de corchetes vacíos: `@data[]`. El siguiente programa ilustra este enfoque:

```raku
my @data = 10, 20, 30;

say "Primero: @data[0], último: @data[1]";
say "Todos los elementos: @data[]";
```

Este programa imprime los datos solicitados:

```console
$ raku t.raku 
Primero: 10, último: 20
Todos los elementos: 10 20 30
```

{% include nav.html %}