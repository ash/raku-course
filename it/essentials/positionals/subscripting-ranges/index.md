---
title: Sottoscrivere intervalli
---

{% include menu.html %}

Un `Range` è un tipo di dato posizionale. Come con gli array, puoi accedere ai suoi singoli elementi.

Ad esempio, ecco come stampare il terzo elemento nella sequenza di elementi che l'intervallo genera:

```raku
my $r = 10..20;
say $r[3]; # 13
```

È importante rendersi conto che gli intervalli, a differenza degli array, non necessariamente mantengono tutti i valori in memoria.

## Dimensione

Per ottenere la dimensione dell'intervallo, utilizza il metodo `elems` come fai con gli array.

```raku
my $r = 10..20;
say $r.elems; # 11
```

{% include nav.html %}