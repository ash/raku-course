---
title: Du funkcioj en unu modulo
translations_gpt:
---

{% include menu.html %}

## Problemo

Kreu modulon nomatan `Calc`, en dosiero `Calc.rakumod`, kiu eksportas du subrutinojn: `add` kaj `mul`, kiuj redonas la sumon kaj la produton de siaj du argumentoj.

Poste skribu apartan programon, kiu uzas la modulon por presi `add(3, 4)` kaj `mul(3, 4)`, ĉiun en sia propra linio.

## Ekzemplo

Rulita kun la modulo sur la serĉvojo, la programo presas:

```console
$ raku -I. calc.raku
7
12
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
