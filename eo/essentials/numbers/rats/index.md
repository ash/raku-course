---
title: Raciaj nombroj en Raku
---

{% include menu.html %}

Raciaj nombroj estas unika trajto de Raku. La datumtipo `Rat` reprezentas tiajn nombrojn.

Interne, raciaj nombroj estas frakcioj kun du entjeraj partoj: numeratoro kaj denominatoro. Do, vi povas facile prezenti nombrojn kiel 1/3 sen perdi precizecon.

Estas kelkaj manieroj por skribi `Rat` nombron en programo en Raku:

```raku
my $x = 1/2;
my $y = <2/3>;
```

Notu, ke la streketo ĉi tie estas parto de la notacio. Ĝi ne estas dividoperanto, do `1/2` ne signifas, ke vi dividas 1 per 2. Tamen, en presado, raciaj nombroj estas montrataj kiel decimalaj nombroj aŭ entjeroj:

```raku
say 1/2; # 0.5
say 3/4; # 0.75
```

La parto de la linio post la simbolo `#` estas komento kaj estas ignorata de la kompililo. Tiaj komentoj estos uzataj en la kurso por montri la eliron de la programo.

## Decimala formo

Estas grave kompreni, ke kiam vi skribas la nombron en decimala formo, ekzemple, `0.5`, Raku kreas `Rat` nombron en tiu momento. Ĝi ne estas entjero, sed ĝi ankaŭ ne estas glitkompunkto (`float` aŭ `double` en aliaj lingvoj). Ĝi estas ankoraŭ racia nombro!

Konsideru la sekvan ekzemplon:

```raku
say 0.1 + 0.2 - 0.3;
```

Se programlingvo uzas glitkompunkta aritmetiko por ĉi tiuj kalkuloj, la rezulto ne estos egala al 0. La retejo [0.30000000000000004.com](https://0.30000000000000004.com) donas elĉerpan liston de ekzemploj kie glitkompunkta aritmetiko ne donas atenditan rezulton.

Sed Raku presas ekzaktan `0`. Ĉi tio okazas ĉar ĝi traktas la nombrojn `0.1`, `0.2`, kaj `0.3` kiel raciajn nombrojn kaj konservas ilin kiel `1/10`, `2/10`, kaj `3/10` interne. Rulu ĝin de la komandlinio por konfirmi:

```console
$ raku -e 'say 0.1 + 0.2 - 0.3'
0
```

## Unikodaj formoj

Eblas ankaŭ uzi Unikodajn karakterojn kiuj reprezentas la frakciojn, kiel `½` aŭ `¼` aŭ `¾`. Probable, ne ĉiam estas facile tajpi ilin per la klavaro, sed ĉi tiuj frakcioj estas ekzakte la samaj valoroj kiel iliaj ASKII-versioj literumitaj kiel frakcio aŭ kiel decimala nombro:

`½` | `1/2` | `<1/2>` | `0.5`
`¼` | `1/4` | `<1/4>` | `0.25`
`¾` | `3/4` | `<3/4>` | `0.75`

Kun kelkaj frakcioj, kiel `1/3`, vi havas malpli da opcioj, `⅓` aŭ `<1/3>`, ĉar la decimala formo postulus senfinan nombron da ciferoj.

{% include nav.html %}