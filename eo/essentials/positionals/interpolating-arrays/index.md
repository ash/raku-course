---
title: Interpolating arrays
---

{% include menu.html %}

Por interpoligi elementojn de tabeloj en duoble-cititaj ŝnuroj, skribu ĝin kiel vi farus en programo mem: `@data[1]`. Por interpoligi la tutan tabelon, aldonu paron da malplenaj krampoj: `@data[]`. La sekva programo ilustras ĉi tiun aliron:

```raku
my @data = 10, 20, 30;

say "First: @data[0], last: @data[1]";
say "All elements: @data[]";
```

Ĉi tiu programo presas la petitan datumon:

```console
$ raku t.raku 
First: 10, last: 20
All elements: 10 20 30
```

{% include nav.html %}