---
title: 'Risinājums: Parsējiet datumu ar nosauktiem tvērumiem'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $date = '2026-07-03';

if $date ~~ / $<year>=(\d ** 4) '-' $<month>=(\d\d) '-' $<day>=(\d\d) / {
    say "year: $<year>, month: $<month>, day: $<day>";
}
```

🦋 Atrodiet programmu failā [parse-date.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/parse-date.raku).

## Izvade

```
year: 2026, month: 07, day: 03
```

## Komentāri

1. `$<year>=( ... )` dod tvērumam vārdu. Pēc veiksmīgas salāgošanas `$<year>`,
`$<month>` un `$<day>` satur satvertos gabalus.

1. `\d ** 4` nozīmē tieši četrus ciparus, tāpēc paraugs atbilst tikai pareizi
veidotam datumam.

{% include nav.html %}
