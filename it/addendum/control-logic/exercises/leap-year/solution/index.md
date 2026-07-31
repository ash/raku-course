---
title: 'Soluzione: Anni bisestili'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
for 2000, 1900, 2024, 2023 -> $year {
    my $leap = $year %% 400 || ($year %% 4 && !($year %% 100));

    say "$year: { $leap ?? 'leap' !! 'common' }";
}
```

🦋 Trova il programma nel file [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/leap-year.raku).

## Output

```
2000: leap
1900: common
2024: leap
2023: common
```

## Commenti

1. La regola si legge direttamente come espressione booleana: un anno bisestile è uno
divisibile per 400, *oppure* uno divisibile per 4 ma non per 100. `%%` è il test di
divisibilità.

1. `1900` è divisibile per 100 ma non per 400, quindi è comune; `2000` è divisibile per
400, quindi è bisestile.

1. Il tipo [`Date`](/it/advanced/date-and-time) di Raku conosce già questa regola. La
espone come `.is-leap-year` — un metodo su un *oggetto data*, quindi crei una data
qualunque dell'anno (qui il 1º gennaio) e glielo chiedi:

    ```raku
    for 2000, 1900, 2024, 2023 -> $year {
        my $leap = Date.new($year, 1, 1).is-leap-year;
        say "$year: { $leap ?? 'leap' !! 'common' }";
    }
    ```

    L'esercizio, ovviamente, riguarda lo scrivere tu stesso la regola.

{% include nav.html %}
