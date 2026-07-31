---
title: Il protocollo degli iteratori
translations_gpt:
---

{% include menu.html %}

Ogni valore su cui puoi ciclare — un elenco, un intervallo, un array — può consegnarti un _iteratore_ con il metodo `.iterator`. Un iteratore ha un metodo essenziale, `pull-one`, che a ogni chiamata restituisce il valore successivo:

```raku
my $it = (10, 20, 30).iterator;
say $it.pull-one; # 10
say $it.pull-one; # 20
say $it.pull-one; # 30
```

Quando i valori finiscono, `pull-one` restituisce una sentinella speciale, `IterationEnd`, invece di un elemento vero. Chiedere allo stesso `$it` un altro valore lo mostra:

```raku
say $it.pull-one =:= IterationEnd; # True
```

L'operatore `=:=` mette alla prova l'identità dello **stesso oggetto**, ed è così che si riconosce la sentinella. Quel dettaglio conta dentro un ciclo, dove devi conservare il valore estratto *e* metterlo alla prova. Se lo **assegni** con `=`, il valore atterra in un contenitore e il confronto finisce per guardare il contenitore invece di `IterationEnd`. Il rimedio è **legarlo** con `:=`, così che la variabile semplicemente *sia* ciò che `pull-one` ha restituito:

```raku
my $it = <a b c>.iterator;
loop {
    my $v := $it.pull-one;      # bind, not assign
    last if $v =:= IterationEnd;
    say $v;
}
```

Il ciclo stampa `a`, `b`, `c` e poi si ferma. È esattamente ciò che un ciclo `for` fa per te sotto il cofano: chiama `.iterator` sulla cosa che stai ciclando e continua a chiamare `pull-one` finché non incontra `IterationEnd`. Raramente hai bisogno di scriverlo a mano, ma farlo una volta mostra che sono gli iteratori — non gli elenchi — ciò su cui Raku cicla davvero.

{% include nav.html %}
