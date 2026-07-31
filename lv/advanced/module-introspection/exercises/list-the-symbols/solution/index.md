---
title: 'Risinājums: Uzskaitīt simbolus'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

Programma, `list.raku`:

```raku
use Circle;

say Circle::.keys.elems;
say Circle::.keys.sort;
```

🦋 Abus avota failus varat atrast direktorijā [exercises/advanced/module-introspection/list-the-symbols](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/list-the-symbols).

## Izvade

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Komentāri

1. `Circle::` ir moduļa pakotne, un `.keys` uzskaita tajā esošos nosaukumus, katru ar tā sigilu.

1. `.elems` saskaita šos nosaukumus — modulis definē divus `our` mainīgos, tāpēc skaits ir `2`.

1. `.keys` negarantē nekādu noteiktu secību, tāpēc mēs lietojam `.sort`, lai iegūtu stabilu, alfabētisku rezultātu `($pi $tau)`. Bez kārtošanas abi nosaukumi dažādos palaišanas reizēs varētu parādīties jebkurā secībā.

{% include nav.html %}
