---
title: 'Soluzione: Salvate e rileggete'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
spurt 'number.txt', "42\n";

my $n = slurp('number.txt').trim.Int;
say $n * 2;
```

🦋 Trova il programma nel file [save-and-read.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/save-and-read.raku).

## Output

```
84
```

## Commenti

1. `spurt` crea il file e vi scrive la stringa; `slurp` rilegge l'intero file in una stringa. Insieme sono un giro completo di salvataggio e ricaricamento.

1. Ciò che torna da `slurp` è testo — `"42\n"` — quindi togliamo il ritorno a capo finale con `trim` e chiamiamo `.Int` per trasformarlo in un numero prima di fare aritmetica. Il risultato, `42 * 2`, è `84`.

1. Il programma funziona comunque anche senza `.trim.Int`.

{% include nav.html %}
