---
title: 'Soluzione: Nomi dei mesi'
---

{% include menu.html %}

In questo programma, i nomi dei mesi sono presi dall'array `@months` che contiene dodici stringhe. Poiché gli indici degli array iniziano da 0, dobbiamo decrementare il numero di input di 1 prima di sottoscrivere l'array.

## Codice

Ecco la soluzione:

```raku
my @months = <
    January February March April
    May June July August
    September October November December
>;

say @months[@*ARGS[0] - 1];
```

🦋 Trova il programma nel file [months-names.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/months-names.raku).

## Output

Prova a eseguire il programma alcune volte per vedere i diversi nomi dei mesi.

```console
$ raku exercises/positionals/months-names.raku 5
May

$ raku exercises/positionals/months-names.raku 1
January

$ raku exercises/positionals/months-names.raku 12
December
```

## Stile

Sta a te scegliere uno dei possibili modi per formattare le liste come quella in questo programma. Confronta alcune opzioni:

```raku
my @months = <
    January February March April
    May June July August
    September October November December >;
```

Oppure:

```raku
my @months = < January   February March    April
               May       June     July     August
               September October  November December >;
```

Puoi anche elencare tutti i mesi in una singola riga.

```raku
my @months = < January February March April May June July August September October November December >;
```

{% include nav.html %}