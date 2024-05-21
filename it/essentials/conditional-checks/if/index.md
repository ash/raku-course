---
title: Verifiche condizionali con if
---

{% include menu.html %}

Il controllo condizionale `if` verifica una condizione e, se è `True`, esegue un blocco di codice.

```raku
if 10 > 4 {
    say 'La matematica funziona!';
}
```

Nota che non è necessario mettere la condizione tra parentesi (ma puoi farlo se lo desideri).

Ovviamente, le variabili sono benvenute nei test:

```raku
my $flag = False;
if $flag {
    # . . . fai qualcosa
}
```

Nel caso in cui più di un controllo utilizzi la stessa variabile, è possibile utilizzare confronti concatenati:

```raku
my $x = 42;
if 40 < $x < 45 {
    say "La risposta corretta $x è data.";
}
```

Se la condizione non è soddisfatta, il blocco di codice associato non viene eseguito e il flusso del programma continua.

```raku
say 'Inizio';
if False {
    say 'Questo non viene mai stampato.';
}
say 'Fine';
```

Questo programma stampa solo `Inizio` e `Fine`.

{% include nav.html %}