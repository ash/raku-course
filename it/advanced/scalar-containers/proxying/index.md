---
title: Proxying delle chiamate di metodo
translations_gpt:
---

{% include menu.html %}

Essere un contenitore scalare significa in realtà essere un oggetto di tipo `Scalar`. Nella maggior parte dei casi, l'uso degli scalari è così trasparente che uno sviluppatore non deve pensare affatto al contenitore e può immaginare di lavorare direttamente con i valori memorizzati al suo interno.

Questo funziona perché un contenitore scalare delega le chiamate ai metodi al valore che contiene. Per esempio, dopo l'assegnazione `my $lang = 'Raku'`, è possibile chiamare il metodo `.chars` sulla variabile:

```raku
my $lang = 'Raku';
say $lang.chars; # 4
```

Il programma stampa `4`, che è il numero di caratteri nella stringa `'Raku'`. Il risultato è esattamente lo stesso che si otterrebbe chiamando `.chars` direttamente sul valore stringa, anziché sulla variabile contenitore:

```raku
say 'Raku'.chars; # 4
```

In altre parole, il contenitore inoltra silenziosamente la chiamata `.chars` alla stringa che contiene e vi restituisce il risultato.

{% include nav.html %}
