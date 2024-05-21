---
title: La funzione MAIN
---

{% include menu.html %}

Un programma Raku non necessita di alcun rituale di boilerplate, quindi puoi iniziare immediatamente a scrivere istruzioni utili. Questa parte del programma, che si trova al livello superiore rispetto a qualsiasi [blocco di codice](/it/essentials/code-blocks) (inclusi, ad esempio, le [funzioni](/it/essentials/functions)), è chiamata _mainline_.

Se il programma contiene una funzione con il nome speciale `MAIN`, Raku esegue questa funzione dopo aver compilato tutto e dopo che il codice mainline è stato eseguito.

```raku
say '1. Codice mainline';

sub MAIN {
    say '3. MAIN chiamato';
}

say '2. Anche mainline';
```

Questo programma esegue prima i `say` di livello superiore, e poi chiama `MAIN`:

```console
$ raku t.raku
1. Codice mainline
2. Anche mainline
3. MAIN chiamato
```

Ovviamente, è anche possibile avere un programma con la funzione `MAIN` e nessun altro codice mainline.

{% include nav.html %}