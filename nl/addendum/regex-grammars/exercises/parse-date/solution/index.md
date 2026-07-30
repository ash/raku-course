---
title: 'Oplossing: Ontleed een datum met benoemde captures'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $date = '2026-07-03';

if $date ~~ / $<year>=(\d ** 4) '-' $<month>=(\d\d) '-' $<day>=(\d\d) / {
    say "year: $<year>, month: $<month>, day: $<day>";
}
```

🦋 Je kunt de broncode vinden in het bestand [parse-date.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/parse-date.raku).

## Uitvoer

```
year: 2026, month: 07, day: 03
```

## Opmerkingen

1. `$<year>=( ... )` geeft een capture een naam. Na een geslaagde match bevatten `$<year>`,
`$<month>` en `$<day>` de gecapturde stukken.

1. `\d ** 4` betekent precies vier cijfers, dus matcht het patroon alleen een correct
gevormde datum.

{% include nav.html %}
