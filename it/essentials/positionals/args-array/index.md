---
title: L'array @*ARGS
---

{% include menu.html %}

Dato che gli array sono stati introdotti, è un buon momento per conoscere uno degli array incorporati, `@*ARGS`. Il `*` nel suo nome è il secondo sigillo, o _twigil_, e ne vedremo altri in futuro. Ma per ora, vediamo i vantaggi di utilizzare questo array speciale. Contiene gli argomenti che il programma riceve dalla linea di comando.

Considera l'esecuzione del seguente programma:

```console
$ raku run.raku alpha beta
```

Il programma `run.raku` riceve due parametri: `alpha` e `beta`. Possono essere letti da `@*ARGS`.

```raku
say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

Questo programma stampa il numero di argomenti passati e gli argomenti stessi:

```console
$ raku run.raku alpha beta
2
alpha
beta
```

Nota che il programma non richiede alcuna modifica se lo chiami come file eseguibile:

```console
$ ./run.raku alpha beta
```

Il programma, in questo caso, [dovrebbe avere uno shebang](/it/essentials/running-programs/from-command-line), ma la cosa più importante è che gli indici di `@*ARGS` iniziano comunque da `0`:

```raku
#!/usr/bin/env raku

say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

{% include nav.html %}