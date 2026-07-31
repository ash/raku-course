---
title: Operazioni sui set
---

{% include menu.html %}

I set possono essere combinati con le consuete operazioni della teoria degli insiemi. Ogni operatore ha un simbolo Unicode e una grafia ASCII; si può usare quello che si preferisce.

L'_unione_ `∪` (o `(|)`) raccoglie tutti i valori presenti in uno dei due set:

```raku
say (set(1, 2, 3) ∪ set(3, 4, 5)).elems; # 5
```

I due set condividono il valore `3`, quindi l'unione ha cinque elementi distinti: `1, 2, 3, 4, 5`.

L'_intersezione_ `∩` (o `(&)`) conserva solo i valori presenti in entrambi i set:

```raku
my $common = set(1, 2, 3) ∩ set(2, 3, 4);
say $common;       # Set(2 3) — nota che i set non sono ordinati
say $common.elems; # 2
say 2 ∈ $common;   # True
```

Qui l'intersezione contiene `2` e `3` — i valori presenti in entrambi i set. Un set non ha un ordine intrinseco, quindi i due elementi possono apparire in qualsiasi ordine quando vengono stampati.

Il risultato di queste operazioni è a sua volta un set, quindi si possono porre le stesse domande: quanti elementi contiene e se un determinato valore gli appartiene.

{% include nav.html %}
