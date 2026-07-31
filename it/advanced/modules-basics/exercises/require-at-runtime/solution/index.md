---
title: 'Solution: Caricare a runtime'
translations_gpt: La soluzione di 'Caricare a tempo di esecuzione'
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

Il programma, `require-import.raku`:

```raku
sub MAIN(Bool :$quiet) {
    if $quiet {
        say 'Silence.';
    }
    else {
        require Greeting <&hello>;
        say hello('Sam');
    }
}
```

🦋 Puoi trovare entrambi i file sorgente nella directory [exercises/advanced/modules-basics/require-at-runtime](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/require-at-runtime).

## Output

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Commenti

1. `require` carica il modulo a tempo di esecuzione anziche al momento della compilazione. Da solo non importa nulla, motivo per cui un semplice `hello` non sarebbe riconosciuto.

1. La lista `<&hello>` dice a `require` di importare quel singolo simbolo, cosi dopo l'istruzione `hello('Sam')` puo essere chiamato direttamente, producendo `Hello, Sam!`.

1. Questo e lo scopo di `require`: poiche viene eseguito a tempo di esecuzione, puo trovarsi dentro un `if`. Quando viene passato `--quiet`, quel ramo viene saltato e il modulo non viene mai caricato — cosa che un `use` al momento della compilazione non potrebbe evitare.

{% include nav.html %}
