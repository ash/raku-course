---
title: Trasformare un supply
translations_gpt:
---

{% include menu.html %}

Un supply può essere trasformato prima che tu vi attinga, un po' come un elenco. Metodi come `map` e `grep` producono un **nuovo** supply i cui valori sono quelli trasformati:

```raku
my @out;
Supply.from-list(1, 2, 3).map(* * 10).tap(-> $v { @out.push($v) });
say @out; # [10 20 30]
```

Il `map(* * 10)` costruisce un nuovo supply che emette dieci volte ogni valore originale, e la presa li raccoglie in `@out`.

`grep` filtra un supply, lasciando passare solo i valori per i quali il suo blocco è vero:

```raku
my @out;
Supply.from-list(1, 2, 3, 4, 5, 6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out; # [2 4 6]
```

Poiché ogni trasformazione restituisce un altro supply, puoi concatenarle, costruendo una piccola pipeline che reagisce al flusso:

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).map(* ** 2).tap(-> $v { @out.push($v) });
say @out; # [4 16 36]
```

È lo stesso vocabolario di map e grep che conosci dagli elenchi, applicato a valori che arrivano nel tempo. Il supply fa la spinta; la tua pipeline dà forma a ciò che esce.

{% include nav.html %}
