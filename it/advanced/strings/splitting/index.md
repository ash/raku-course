---
title: Dividere e unire
---

{% include menu.html %}

Le stringhe possono essere suddivise in parti e rimesse insieme in diversi modi.

Il metodo `words` divide una stringa in una lista di parole separate da spazi bianchi:

```raku
say 'Hello big World'.words; # (Hello big World)
```

Il metodo `split` spezza una stringa in corrispondenza di un separatore a scelta:

```raku
say 'a,b,c'.split(','); # (a b c)
```

Un caso speciale importante e la divisione sulla **stringa vuota** `''`: spezza una stringa nei suoi singoli caratteri, ma inserisce anche una stringa vuota all'inizio e alla fine, quindi il risultato ha due elementi in piu di quanto ci si potrebbe aspettare:

```raku
say 'abc'.split('').elems;        # 5 — the three letters, plus an empty string at each end
say 'abc'.split('', :skip-empty); # (a b c) — the :skip-empty adverb drops the empties
```

Per dividere in caratteri, il metodo `comb`, chiamato senza argomenti, lo fa direttamente — senza stringhe vuote da ripulire:

```raku
say 'Raku'.comb; # (R a k u)
```

Per fare il contrario, il metodo `join` unisce una lista di valori in un'unica stringa, inserendo un separatore tra di essi:

```raku
say <a b c>.join('-'); # a-b-c
```

Altri due metodi operano su parti di una stringa. Il metodo `substr` estrae una porzione, data una posizione iniziale e, opzionalmente, una lunghezza:

```raku
say 'Hello World'.substr(0, 5); # Hello
say 'Hello World'.substr(6);    # World
```

E `trim` rimuove gli spazi bianchi da entrambe le estremita di una stringa:

```raku
say '  hi  '.trim; # hi
```

{% include nav.html %}
