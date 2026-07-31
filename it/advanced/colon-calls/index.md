---
title: Chiamate con i due punti
translations_gpt:
---

{% include menu.html %}

Quando chiami un metodo o una subroutine, di solito metti i suoi argomenti tra parentesi: `@a.grep(* > 5)`. Raku offre una seconda forma — metti un **due punti** dopo il nome, e tutto ciò che segue i due punti diventa la lista degli argomenti, senza alcuna parentesi:

```raku
say (1..10).grep: * %% 2; # (2 4 6 8 10)
```

I due punti in `grep:` svolgono lo stesso ruolo delle parentesi: `(1..10).grep: * %% 2` significa esattamente `(1..10).grep(* %% 2)`. Le due forme sono intercambiabili:

```raku
say <a b c>.join('-'); # a-b-c
say <a b c>.join: '-'; # a-b-c
```

La forma con i due punti è particolarmente comoda con i metodi che accettano un **blocco** o un'espressione [Whatever](/it/advanced/whatever), perché elimina un livello di annidamento. Confronta:

```raku
my @a = 3, 1, 2;

say @a.sort({ $^b <=> $^a }); # parentesi attorno al blocco
say @a.sort: { $^b <=> $^a }; # due punti — nessuna parentesi di chiusura da abbinare
```

Entrambi stampano `(3 2 1)`, ma la versione con i due punti si legge in modo più pulito, specialmente quando il blocco è lungo.

Questo è il corrispettivo per le chiamate ai metodi della chiamata senza parentesi che già usi con gli operatori di lista come `say 1, 2, 3` — lì, `say` prende tutto ciò che segue come suoi argomenti. L'unica regola da ricordare è che la forma con i due punti consuma il **resto dell'istruzione** come argomenti, quindi deve trovarsi alla **fine** di una catena di chiamate. Ecco perché `('a' .. 'z')».uc».ord.grep: 60 < * < 70` funziona: `grep` è l'ultima chiamata e non c'è nulla da concatenare dopo di essa. Se hai bisogno di chiamare altri metodi dopo, usa la forma con le parentesi oppure raggruppa le parti dell'intera espressione per renderla chiara:

```raku
say (('a' .. 'z')».uc».ord.grep: 60 < * < 70)».chr # (A B C D E)
```

Una cosa a cui fare attenzione: non combinare i due punti **e** le parentesi come `.grep:( … )`. Questa scrittura entra in conflitto con la sintassi dei letterali di firma `:( … )` e non viene analizzata correttamente. Usa `.grep( … )` oppure `.grep: …` — l'una o l'altra, non entrambe.

{% include nav.html %}
