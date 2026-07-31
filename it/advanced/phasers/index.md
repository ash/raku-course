---
title: Phaser
---

{% include menu.html %}

Un _phaser_ e un blocco speciale che viene eseguito automaticamente in un momento particolare della vita di un programma, piuttosto che dove appare nel codice sorgente. Non si chiama un phaser; si dice soltanto _quando_ il suo codice deve essere eseguito, denominando il blocco.

I phaser piu comuni contrassegnano le fasi del programma nel suo complesso:

* `BEGIN` viene eseguito il prima possibile, mentre il programma e ancora in fase di compilazione;
* `INIT` viene eseguito una volta all'inizio dell'esecuzione, prima del codice principale;
* `END` viene eseguito una volta alla fine, dopo che il codice principale e terminato.

Il seguente programma posiziona questi phaser tra istruzioni ordinarie. Nota che l'output non segue l'ordine delle righe nel file:

```raku
say 'main body';
BEGIN say 'BEGIN';
END say 'END';
INIT say 'INIT';
```

Il programma stampa:

```
BEGIN
INIT
main body
END
```

`BEGIN` viene eseguito per primo, durante la compilazione. Poi, a tempo di esecuzione, `INIT` viene eseguito prima del corpo principale. Il corpo principale viene stampato dopo, e `END` viene eseguito per ultimo, indipendentemente da dove e stato scritto.

Un uso comune di `END` e stampare un riepilogo o ripulire qualcosa appena prima che il programma termini, mentre `BEGIN` e utile per operazioni che devono avvenire prima di qualsiasi altra cosa.

{% include nav.html %}
