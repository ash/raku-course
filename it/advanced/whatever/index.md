---
title: La stella Whatever
translations_gpt: true
---

{% include menu.html %}

Potresti aver visto `*` usato in espressioni come `* * 2` o `* %% 2` quando si chiamano `map` e `grep`. Quel `*` e la _Whatever star_ (stella Whatever), e l'espressione che la circonda costruisce al volo una piccola funzione a un argomento. Questa sezione spiega cosa sia realmente, come si relaziona a un blocco e dove la stella da sola significa semplicemente "qualsiasi cosa tu voglia".

## Una stella crea una funzione

Quando `*` appare in un'espressione, Raku trasforma l'intera espressione in una funzione — un `WhateverCode` — in cui la stella rappresenta l'argomento:

```raku
my $double = * * 2;

say $double.^name; # WhateverCode
say $double(21);   # 42
```

`* * 2` e una funzione che moltiplica il suo unico argomento per due. Ecco perche `(1..5).map(* * 2)` funziona: a `map` viene passata esattamente una funzione a un argomento di questo tipo.

## Whatever rispetto a un blocco

Un'espressione Whatever e un modo piu breve di scrivere una funzione che potresti anche scrivere come blocco. Queste tre forme sono equivalenti:

```raku
* * 2
{ $_ * 2 }
-> $x { $x * 2 }
```

La forma Whatever non nomina alcun parametro; la forma a blocco usa la variabile topic `$_`; la forma pointy nomina `$x`. Quest'ultima, `-> $x { ... }`, e una piccola funzione a se stante — la incontrerai in modo approfondito in [Subroutine anonime](/it/advanced/anonymous-subroutines); qui e sufficiente leggerla come un terzo modo di scrivere la stessa funzione a un argomento. Per un'espressione semplice, la stella e la forma piu compatta, ed e per questo che e cosi comune con `map`, `grep` e `sort`:

```raku
say (1..5).map(* * 2);            # (2 4 6 8 10)
say (1..5).map({ $_ * 2 });       # (2 4 6 8 10)
say (1..5).map(-> $x { $x * 2 }); # (2 4 6 8 10)
```

Usa un **blocco** quando la logica richiede piu di un'espressione, o quando un parametro con nome esplicito aiuta la chiarezza. Usa la **stella** quando una breve espressione dice tutto.

## Piu di una stella

Ogni `*` nell'espressione e un argomento separato, in ordine. Quindi due stelle creano una funzione a **due** argomenti:

```raku
my $add = * + *;

say $add(3, 4); # 7
```

Qui `* + *` e una funzione a due argomenti che somma i suoi argomenti — ad esempio un totale parziale e l'elemento successivo.

## La stella Whatever da sola

Da sola, `*` significa "qualsiasi cosa" — tutto quello che c'e, o nessun limite. Due usi comuni:

```raku
my @a = 10, 20, 30;
say @a[*-1];        # 30  — * è la lunghezza dell'array, quindi *-1 è l'ultimo indice

say (1..*).head(3); # (1 2 3)  — 1..* è un intervallo aperto
```

In `@a[*-1]` la stella rappresenta il numero di elementi, e in `1..*` rappresenta "nessun limite superiore". Che costruisca una funzione o significhi "qualsiasi cosa tu voglia", la stella e una delle abbreviazioni piu utili di Raku.

{% include nav.html %}
