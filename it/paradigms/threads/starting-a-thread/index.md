---
title: Avviare un thread
translations_gpt:
---

{% include menu.html %}

`Thread.start` prende un blocco e lo esegue su un nuovo thread, restituendo un oggetto `Thread` che rappresenta il lavoro in corso:

```raku
my $t = Thread.start({ say 'hello from the thread' });
```

Il blocco gira in modo concorrente rispetto al codice che segue. Il programma principale **non** lo aspetta automaticamente: prosegue subito, e il thread fa il proprio lavoro in secondo piano.

Un dettaglio piccolo ma importante: l'argomento deve essere un blocco di codice. Una coppia vuota di graffe `{ }` è un **hash** vuoto, non un blocco vuoto, quindi un thread ha sempre bisogno di un corpo che faccia davvero qualcosa:

```raku
my $t = Thread.start({ 2 + 2 }); # fine: a block with a body
```

Poiché il programma principale e il thread girano ora nello stesso momento, non puoi contare sull'ordine in cui compare il loro output — a meno che tu non aspetti esplicitamente che il thread finisca, che è l'argomento della pagina successiva.

{% include nav.html %}
