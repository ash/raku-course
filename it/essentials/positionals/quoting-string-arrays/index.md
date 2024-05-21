---
title: Citazione di array di stringhe
---

{% include menu.html %}

Per gli array di stringhe, dove gli elementi sono stringhe brevi senza spazi, Raku offre una sintassi comoda per inizializzarli.

```raku
my @digits = <zero one two three four five six seven eight nine>;
```

Sta a te decidere se aggiungere spazi aggiuntivi intorno alle parentesi angolari o meno. Il compilatore accetta entrambe le opzioni.

```raku
my @digits = < zero one two three four five six seven eight nine >;
```

Entrambe le costruzioni sono equivalenti a una variante semplice:

```raku
my @digits = 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine';
```

%%tipblock
## Array vs Lista

Nota che negli esempi sopra, la citazione `< . . . >` crea una `List`, non un `Array`. Puoi confermarlo chiamando il metodo `WHAT`:

```raku
say <a b c>.WHAT; # (List)
```

Tuttavia, quando lo assegni a un array, ottieni un array con gli elementi della lista.

```raku
my @a = <a b c>;
say @a.WHAT; # (Array)
```

%%/tipblock

{% include nav.html %}