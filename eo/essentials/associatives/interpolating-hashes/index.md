---
title: Interpolating hashes
---

{% include menu.html %}

Por interpoligi elementojn de tabelo en duobla-cititaj kordoj, skribu ilin kiel vi faras en la programo mem: `%data<FR>`. Por interpoligi la tutan haketon, aldonu paron da malplenaj angulaj aŭ kurbaj krampoj: `@data{}`. La sekva programo ilustras ĉi tiun aliron:

```raku
my %data = FR => 'Paris', IT => 'Rome';

say "%data<FR>";
say "%data<>";

# Aŭ:
# say "%data{}";
```

Ĉi tiu programo presas la petitan datumon:

```console
$ raku t.raku
Paris
FR	Paris
IT	Rome
```

Notu, ke presi la tutan haketon povas generi multlinian eliron.

{% include nav.html %}