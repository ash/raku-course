---
title: Parallelismo senza ordine con race
translations_gpt:
---

{% include menu.html %}

`.race` parallelizza allo stesso modo di `.hyper`, con una differenza: **non** promette di restituire i risultati in ordine. Il lavoratore che finisce per primo contribuisce per primo il proprio risultato.

```raku
say (1..10).race.map(* ** 2).sort; # (1 4 9 16 25 36 49 64 81 100)
```

I quadrati tornano in un ordine imprevedibile, quindi il `.sort` è lì per rendere deterministico l'output. Se avessimo stampato senza ordinare, i numeri ci sarebbero stati tutti ma forse mescolati.

Poiché non deve tenere ordinati i risultati, `.race` può avere un po' meno sovraccarico di `.hyper`. Il compromesso è semplice:

* usa `.hyper` quando l'**ordine** dei risultati conta;
* usa `.race` quando **non** conta — per esempio quando stai per sommare, contare o combinare altrimenti i risultati in un modo indipendente dall'ordine.

```raku
say (1..100).race.map(* * 2).sum; # 10100
```

Sommare è indipendente dall'ordine, quindi `.race` qui è una buona scelta e dà lo stesso `10100`. Entrambi i metodi riguardano la stessa idea — lasciare che il lavoro indipendente giri insieme — e scegli fra loro in base al fatto che l'ordinamento ti interessi o no.

{% include nav.html %}
