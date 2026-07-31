---
title: Scegliere quello giusto
---

{% include menu.html %}

Per gli scalari di uso comune come numeri e stringhe, tutte e tre le rappresentazioni hanno lo stesso aspetto. Iniziano a differire per valori composti o indefiniti. Ecco un `Pair` mostrato in tre modi:

```raku
say (foo => 1).gist; # foo => 1
say (foo => 1).Str;  # foo	1
say (foo => 1).raku; # :foo(1)
```

Una regola generale approssimativa:

* [`.gist`](../gist) — per output destinato a essere *letto* da una persona (`say`, `note`).
* [`.Str`](../str) — per output che è *testo semplice* (`print`, `put`, interpolazione, l'operatore `~`).
* [`.raku`](../raku-method) — per una rappresentazione *simile al codice* durante il debug (`dd`).

Ciascuno di questi metodi può ricevere una tua definizione personalizzata quando scrivi una classe, così anche i tuoi oggetti vengono stampati in modo leggibile. Torneremo su questo argomento quando [creeremo le classi](/it/oop/classes) nella parte successiva.

{% include nav.html %}
