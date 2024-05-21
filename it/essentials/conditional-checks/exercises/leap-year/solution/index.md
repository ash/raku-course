---
title: 'Soluzione: Anno bisestile'
---

{% include menu.html %}

## Disclaimer

La soluzione mostrata di seguito ha lo scopo di addestrarti all'uso dei controlli condizionali. Nella vita reale, puoi imparare i metodi della classe `Date` integrata. Lo impareremo nella seconda parte del corso.

## Soluzione

L'algoritmo per la rilevazione se un anno è bisestile:

1. se l'anno non è divisibile per 4 => anno comune
1. se l'anno non è divisibile per 100 => anno bisestile
1. se l'anno non è divisibile per 400 => anno comune
1. altrimenti => anno bisestile

Nota che puoi usare i tipi integrati per lavorare con data e ora, quindi torneremo su questo compito nella seconda parte del corso.

## Codice 1

La prima soluzione riproduce letteralmente i passaggi sopra indicati:

```raku
my $year = prompt 'Anno: ';

if $year % 4 {
    say 'Anno comune';
}
elsif $year % 100 {
    say 'Anno bisestile';
}
elsif $year % 400 {
    say 'Anno comune';
}
else {
    say 'Anno bisestile';
}
```

🦋 Trova il programma nel file [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/leap-year.raku).

## Codice 2

Nella seconda soluzione, la logica è racchiusa in una singola espressione. Le parentesi non sono sempre necessarie ma sono aggiunte qui per chiarezza.

```raku
my $year = prompt 'Anno: ';

say (($year %% 400) || (($year %% 4) && ($year % 100))) ?? 'Anno bisestile' !! 'Anno comune';
```

🦋 Trova il programma nel file [leap-year-formula.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/leap-year-formula.raku).

## Output

Prova entrambi i programmi con i casi più critici, ad esempio, 1900, 2000, 2020, 2021.

```console
$ raku exercises/conditional-checks/leap-year.raku
Anno: 1900
Anno comune

$ raku exercises/conditional-checks/leap-year.raku
Anno: 2000
Anno bisestile
```

```console
$ raku exercises/conditional-checks/leap-year-formula.raku
Anno: 2020
Anno bisestile

$ raku exercises/conditional-checks/leap-year-formula.raku
Anno: 2021
Anno comune
```

%%tipblock
## `%%` vs `%`

Nota che nei contesti booleani, gli operatori `%%` e `%` sono complementari. Puoi usare questo fatto per scegliere uno degli operatori per evitare il confronto esplicito con zero.

```raku
say ?(100 % 3);    # True
say 100 % 3 != 0;  # True

say ?(100 %% 3);   # False
say 100 %% 3 != 0; # Falso
```
%%/tipblock

{% include nav.html %}