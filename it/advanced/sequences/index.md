---
title: Sequenze
---

{% include menu.html %}

Una _sequenza_ è una serie ordinata di valori prodotti uno dopo l'altro. Raku costruisce le sequenze con l'operatore `...`, che individua il modello dai valori forniti e genera il resto fino a un punto finale.

Il caso più semplice conta da un valore a un altro:

```raku
say 1 ... 5; # (1 2 3 4 5)
```

Se fornisci due valori iniziali, Raku calcola il passo tra di essi e continua con lo stesso passo. Ecco come si crea una sequenza aritmetica:

```raku
say 1, 3 ... 11; # (1 3 5 7 9 11)
```

Qui i valori iniziali `1, 3` impostano il passo a due, quindi Raku conta di due in due e si ferma quando raggiunge `11`.

Il valore prodotto da `...` è di tipo `Seq`:

```raku
say (1 ... 5).WHAT; # (Seq)
```

Gli argomenti seguenti mostrano altri modelli che l'operatore `...` è in grado di riconoscere e come una sequenza possa essere lazy, anche infinita.

{% include nav.html %}
