---
title: 'Soluzione: Analizzate una data con catture con nome'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $date = '2026-07-03';

if $date ~~ / $<year>=(\d ** 4) '-' $<month>=(\d\d) '-' $<day>=(\d\d) / {
    say "year: $<year>, month: $<month>, day: $<day>";
}
```

🦋 Trova il programma nel file [parse-date.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/parse-date.raku).

## Output

```
year: 2026, month: 07, day: 03
```

## Commenti

1. `$<year>=( ... )` dà un nome a una cattura. Dopo una corrispondenza riuscita, `$<year>`,
`$<month>` e `$<day>` contengono i pezzi catturati.

1. `\d ** 4` significa esattamente quattro cifre, quindi lo schema riconosce solo una data
di forma corretta.

{% include nav.html %}
