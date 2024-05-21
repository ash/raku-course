---
title: 'Esercizio: Aumento di stipendio'
---

{% include menu.html %}

## Problema

Dato un hash con i dati di un dipendente:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;
```

Aumenta lo stipendio del 5&thinsp;% e stampalo insieme al nome del dipendente. Assicurati che l'hash `%employee` mantenga valori corretti dopo l'aumento.

## Esempio

Ecco l'output previsto del programma:

```console
$ raku salary-raise.raku
Nuovo stipendio di Eliza Vents: 3150
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}