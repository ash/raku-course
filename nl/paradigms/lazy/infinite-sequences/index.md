---
title: Oneindige reeksen
translations_gpt:
---

{% include menu.html %}

Vervang de eindwaarde door een `*` en de reeks wordt **oneindig** — ze heeft geen laatste element. Omdat de lijst lui is, is dat volkomen veilig: er wordt niets berekend tot je het opneemt.

```raku
say (1, 2, 4 ... *).head(5); # (1 2 4 8 16)
```

De reeks machten van twee gaat eeuwig door, maar `.head(5)` haalt er alleen de eerste vijf uit. Het bereik `1..*` is de eenvoudigste oneindige reeks — alle gehele getallen vanaf één:

```raku
say (1..*).head(3);          # (1 2 3)
say (1..*).map(* ** 2).head(4); # (1 4 9 16)
```

Je kunt een reeks zelfs in termen van haar eigen eerdere elementen definiëren. De Fibonacci-reeks, waarin elk getal de som van de vorige twee is, is befaamd om zijn eenregelige vorm:

```raku
my @fib = 1, 1, * + * ... *;
say @fib[^10]; # (1 1 2 3 5 8 13 21 34 55)
```

De closure `* + *` neemt de twee vorige elementen en telt ze op. De reeks in `@fib` bewaren kan hier prima omdat de operator `...` haar als lui markeert, zodat de array niet probeert haar helemaal te berekenen — alleen de tien elementen waar `@fib[^10]` om vraagt worden ooit geproduceerd.

De vuistregel: een oneindige reeks is veilig zolang je er alleen een eindig stuk uit haalt.

{% include nav.html %}
