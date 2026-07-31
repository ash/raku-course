---
title: gather pigro
translations_gpt:
---

{% include menu.html %}

Un blocco `gather` è _pigro_: non gira tutto in una volta. Produce valori solo man mano che vengono estratti, il che significa che un `gather` può descrivere una serie **senza fine** ed essere comunque utile — smetti semplicemente di prendere valori quando ne hai abbastanza.

Il trucco è che devi mantenere pigro il risultato. Conservarlo in un semplice `@array` proverebbe a raccogliere tutti i valori in una volta, e per una serie senza fine non finirebbe mai. Conserva invece la sequenza in uno scalare (dove resta una `Seq` pigra) ed estraine una fetta:

```raku
my $naturals = gather {
    my $n = 1;
    loop {
        take $n++;
    }
}

say $naturals[^5]; # (1 2 3 4 5)
```

Il `loop` non finisce mai, ma vengono prodotti solo cinque valori, perché è tutto ciò che abbiamo chiesto con `[^5]`. Puoi anche estrarre dalla testa con `.head`:

```raku
say (gather { my $n = 1; loop { take $n++ } }).head(3); # (1 2 3)
```

È la pigrizia a permettere a `gather` di modellare flussi infiniti in sicurezza: nulla viene calcolato finché non serve, e ne prendi esattamente quanto vuoi.

{% include nav.html %}
