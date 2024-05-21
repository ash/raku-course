---
title: Commenti multi-linea
---

{% include menu.html %}

Non appena vuoi lasciare un commento che è più grande di una singola riga, puoi scegliere di avere alcuni commenti su singola riga o un singolo commento multi-linea.

I commenti multi-linea iniziano con una combinazione di due caratteri ``#` `` e sono seguiti da una coppia di caratteri di chiusura `( )`, `{ }`, `[ ]`, o `< >` o dalle loro copie ripetute: `(( ))`, `[[[ ]]]`, ecc.

Per esempio:

```raku
my $name;
#`( Chiederemo all'utente
di inserire il proprio nome prima e poi
salveremo l'input in una variabile. )

$name = prompt 'Qual è il tuo nome? ';
#`{ Il programma ora aspetta
fino a quando l'utente inserisce il nome
e preme Invio. }

say $name; #`( E ora possiamo stamparlo )
```

{% include nav.html %}