---
title: Quiz — L'array @*ARGS
---

{% include menu.html %}

Stai eseguendo il seguente programma alcune volte. Per ogni esecuzione, trova le risposte corrette.

Il programma è salvato nel file `t.raku` e ha il seguente codice:

```raku
say @*ARGS.elems;
say @*ARGS[0];
```

## 1

Il programma viene eseguito come:

```console
$ raku t.raku hello world
```

Quali sono i valori stampati da ciascuna delle righe di codice?

{:.quiz-select}
2 | `say @*ARGS.elems;` stampa&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` stampa&nbsp; (: hello, world, hello world :)

## 2

Il programma viene eseguito come:

```console
$ raku t.raku "hello world"
```

Quali sono i valori stampati?

{:.quiz-select}
1 | `say @*ARGS.elems;` stampa&nbsp; (: 1, 2 :) | La stringa quotata è un singolo argomento.
hello world | `say @*ARGS[0];` stampa&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :)

## 3

Il programma viene eseguito come:

```console
$ raku t.raku "hello" "world"
```

Cosa stampa?

{:.quiz-select}
2 | `say @*ARGS.elems;` stampa&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` stampa&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :) | Le virgolette dalla shell non sono incluse nel valore dell'argomento.


{% include quiz.html %}

{% include nav.html %}