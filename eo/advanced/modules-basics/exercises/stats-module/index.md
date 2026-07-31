---
title: Uzi statistikan modulon
translations_gpt:
---

{% include menu.html %}

## Problemo

Estas donita al vi modulo `Stats.rakumod`, kiu eksportas du subrutinojn — `total` kaj `mean` — kie `mean` estas konstruita sur `total`:

```raku
unit module Stats;

sub total(@numbers) is export {
    [+] @numbers
}

sub mean(@numbers) is export {
    total(@numbers) / @numbers.elems
}
```

Skribu apartan programon, kiu uzas ĉi tiun modulon kaj, por la listo `10, 20, 30, 40`, presas kaj la sumon kaj la mezumon.

## Ekzemplo

Rulita kun la modulo sur la serĉvojo, la programo presas:

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
