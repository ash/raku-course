---
title: 'Soluzione: Aumento di stipendio'
---

{% include menu.html %}

Il programma deve aggiornare uno dei valori dell'hash dato. Assegnare un nuovo valore non differisce molto dall'impostare un nuovo valore di una variabile scalare.

## Codice

Ecco la soluzione:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;

my $raise = 5; # in percentuale

%employee<salary> *= (1 + $raise / 100);
say "Nuovo stipendio di %employee<full-name>: %employee<salary>";
```

🦋 Trova il programma nel file [salary-raise.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/salary-raise.raku).

## Output

Quando esegui il programma, assicurati di aver effettuato calcoli validi e di aver convertito correttamente il numero di percentuali.

```console
$ raku exercises/associatives/salary-raise.raku
Nuovo stipendio di Eliza Vents: 3150
```

{% include nav.html %}