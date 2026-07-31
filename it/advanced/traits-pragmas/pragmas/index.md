---
title: Pragma
---

{% include menu.html %}

Un _pragma_ si presenta come un modulo caricato con `use`, ma invece di importare codice modifica una regola di compilazione per il resto dello scope corrente. Si attiva con `use` e (dove ha senso) si disattiva con `no`.

Il pragma più importante, `strict`, è **attivo per impostazione predefinita** in Raku: richiede che ogni variabile sia dichiarata prima dell'uso, motivo per cui un errore di battitura in un nome di variabile viene intercettato anziché creare silenziosamente una nuova variabile.

Disattivando `strict` con `no strict` si elimina questo requisito, permettendo di assegnare un valore a una variabile mai dichiarata con `my`:

```raku
no strict;

$x = 42;
say $x; # 42
```

Con il `strict` predefinito attivo, quel semplice `$x = 42` sarebbe un errore di compilazione — *Variable '$x' is not declared*. La riga `no strict` rilassa la regola per il resto dello scope che la contiene.

Altri pragma includono `fatal` (che trasforma un fallimento silenzioso in un'eccezione lanciata — utile una volta che hai conosciuto la gestione delle eccezioni), `isms` (per consentire idiomi presi in prestito da altri linguaggi) e `variables` (per regolare le regole sulle variabili). L'effetto di un pragma è _lessicale_ — dura solo fino alla fine del blocco in cui appare — quindi puoi restringere o allentare una regola esattamente per la porzione di codice dove lo desideri.

Un pragma accetta un argomento: `lib` aggiunge una directory alla lista in cui Raku cerca quando carica i moduli — l'equivalente nel programma dell'opzione da riga di comando `-I`:

```raku
use lib 'lib';
```

Lo userai quando inizierai a scrivere e caricare i tuoi [moduli](/it/advanced/modules-basics/using-modules).

{% include nav.html %}
