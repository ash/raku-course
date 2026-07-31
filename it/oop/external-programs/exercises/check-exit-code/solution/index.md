---
title: 'Soluzione: Controllate il codice di uscita'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $proc = run 'sh', '-c', 'exit 4';

say $proc.exitcode;
say $proc ?? 'success' !! 'failure';
```

🦋 Trova il programma nel file [check-exit-code.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/check-exit-code.raku).

## Output

```
4
failure
```

## Commenti

1. `run` restituisce un `Proc`. Conservarlo in `$proc` — e poi leggerlo — è importante qui: un comando fallito il cui `Proc` venisse scartato solleverebbe un'eccezione, mentre ispezionare il risultato conta come gestirlo.

1. `.exitcode` è il numero restituito dal comando: `4`. Mettere alla prova il `Proc` come booleano risponde alla domanda più semplice — è vero solo quando il codice di uscita è `0`, quindi qui è falso e il programma stampa `failure`.

{% include nav.html %}
