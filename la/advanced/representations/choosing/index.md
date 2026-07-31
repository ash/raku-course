---
title: Rectam eligere
---

{% include menu.html %}

Pro scalaribus quotidianis ut numeris et seriebus, omnes tres repraesentationes idem apparent. Differre incipiunt pro valoribus compositis vel indefinitis. Hic est `Pair` tribus modis ostensus:

```raku
say (foo => 1).gist; # foo => 1
say (foo => 1).Str;  # foo	1
say (foo => 1).raku; # :foo(1)
```

Regula approximata:

* [`.gist`](../gist) — pro output quod ab homine *legendum* est (`say`, `note`).
* [`.Str`](../str) — pro output quod *textus planus* est (`print`, `put`, interpolatio, operator `~`).
* [`.raku`](../raku-method) — pro repraesentatione *codici simili* dum errores corrigis (`dd`).

Quaelibet harum methodorum propriam definitionem accipere potest cum classem scribis, ut obiecta tua quoque pulchre imprimantur. Ad hoc redibimus cum [classes creamus](/la/oop/classes) in parte sequenti.

{% include nav.html %}
