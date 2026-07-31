---
title: 'Soluzione: Voti in lettere'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
for 95, 82, 71, 58 -> $score {
    my $grade = do given $score {
        when * >= 90 { 'A' }
        when * >= 80 { 'B' }
        when * >= 70 { 'C' }
        when * >= 60 { 'D' }
        default      { 'F' }
    }

    say "$score -> $grade";
}
```

🦋 Trova il programma nel file [letter-grades.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/letter-grades.raku).

## Output

```
95 -> A
82 -> B
71 -> C
58 -> F
```

## Commenti

1. `do given` fa dell'intero `given`/`when` un'espressione il cui valore è il blocco che
corrisponde — qui una lettera di voto — che viene riposta in `$grade`.

1. Ogni `when * >= N` è un confronto Whatever con l'argomento corrente. Vince il primo che
riesce, quindi a ogni soglia basta un limite inferiore.

{% include nav.html %}
