---
title: Reading command line arguments
---

{% include menu.html %}

La funzione `MAIN` è utile non solo per individuare esplicitamente l'inizio del programma, ma anche per i suoi argomenti, che ricevono i valori passati nella riga di comando.

Ci sono due modi per leggere gli argomenti della riga di comando. Uno di questi è tramite l'array [`@*ARGS`](/it/essentials/positionals/args-array), che abbiamo già utilizzato. Esaminiamo ora il secondo metodo.

Consideriamo un programma che somma due numeri.

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

Puoi eseguire il programma nel seguente modo. Il programma stampa la somma dei suoi due argomenti:

```console
$ raku t.raku 123 45
168
```

Come qualsiasi altra funzione, la funzione `MAIN` può avere valori predefiniti per alcuni (o anche tutti) dei suoi argomenti. Ad esempio:

```raku
sub MAIN($a, $b = 100) {
    say $a + $b;
}
```

Se il secondo argomento non viene fornito, viene utilizzato il valore predefinito:

```console
$ raku t.raku 15
115
```

{% include nav.html %}