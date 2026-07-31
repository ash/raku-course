---
title: gather perezoso
translations_gpt:
---

{% include menu.html %}

Un bloque `gather` es _perezoso_: no se ejecuta de una vez. Produce valores solo a medida que se extraen, lo que significa que un `gather` puede describir una serie **sin fin** y seguir siendo útil: simplemente dejas de tomar valores cuando ya tienes bastantes.

La trampa está en que debes mantener el resultado perezoso. Guardarlo en un `@array` normal intentaría reunir todos los valores a la vez, y para una serie sin fin eso no termina nunca. En su lugar, mantén la secuencia en un escalar (donde sigue siendo una `Seq` perezosa) y extrae de ella una porción:

```raku
my $naturals = gather {
    my $n = 1;
    loop {
        take $n++;
    }
}

say $naturals[^5]; # (1 2 3 4 5)
```

El `loop` no termina nunca, pero solo se producen cinco valores, porque es todo lo que pedimos con `[^5]`. También puedes extraer desde el principio con `.head`:

```raku
say (gather { my $n = 1; loop { take $n++ } }).head(3); # (1 2 3)
```

La pereza es lo que permite a `gather` modelar flujos infinitos sin peligro: no se calcula nada hasta que hace falta, y tomas exactamente tanto como quieras.

{% include nav.html %}
