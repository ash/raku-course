---
title: Tabeloj
translations_gpt:
---

{% include menu.html %}

Tabelo estas ordigita ujo, kies elementoj mem estas skalaraj ujoj.

```raku
my @array = 100, 200, 300;
my @letters = 'a', 'b', 'c';
```

La sigelo `@` indikas, ke tia variablo kondutas kiel objekto `Positional`, do vi povas subskribi ĝin por aliri unuopajn elementojn:

```raku
say @array[1];   # 200
say @letters[2]; # c
```

Ĉar ĉiu elemento estas skalara ujo, vi povas atribui novan valoron al ĝi, ĝuste kiel vi farus kun memstara skalara variablo:

```raku
my @array = 100, 200, 300;
@array[0] = 10;
say @array; # [10 200 300]
```

Vi ankaŭ povas atribui valoron de alia tipo, ekzemple:

```raku
my @array = 100, 200, 300;
@array[0] = 'ten';
say @array; # [ten 200 300]
```

Jen kio faras tabelojn _ŝanĝeblaj_: ĉiu fako estas ujo, kiu povas ricevi novan valoron. Kiel vi vidos en la sekva temo, [listoj](/eo/advanced/ordered-containers/lists) kondutas alie.

{% include nav.html %}
