---
title: Ŝlosiloj, valoroj kaj paroj
translations_gpt:
---

{% include menu.html %}

Aliaj adverboj ŝanĝas, **kion** subskribo redonas. Defaŭlte subskribo redonas la valoron; ĉi tiuj redonas pli:

* `:v` — la valoron (la defaŭlto)
* `:k` — la ŝlosilon (aŭ indekson)
* `:kv` — kaj la ŝlosilon kaj la valoron
* `:p` — `Pair` el ŝlosilo kaj valoro

Por tabelo, la «ŝlosilo» estas la indekso:

```raku
my @a = 10, 20, 30;

say @a[1]:kv; # (1 20)
say @a[1]:p;  # 1 => 20
```

`@a[1]:kv` redonas la indekson kaj la valoron kune kiel liston, kaj `@a[1]:p` redonas ilin kiel paron.

La samo funkcias por hakoj, kaj estas precipe oportuna trans tranĉaĵo de pluraj ŝlosiloj samtempe:

```raku
my %h = a => 1, b => 2, c => 3;

say %h<a c>:kv; # (a 1 c 3)
```

Ĉi tie, du-ŝlosila tranĉaĵo revenas kiel alternantaj ŝlosiloj kaj valoroj. Ĉi tiuj adverboj estas tio, kion `map`, `for` kaj similaj ofte uzas, kiam vi volas trakti ŝlosilojn kaj valorojn flank-al-flanke, sen dividi la laboron en apartajn serĉojn.

{% include nav.html %}
