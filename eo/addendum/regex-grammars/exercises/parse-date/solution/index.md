---
title: 'Solvo: Analizu daton per nomitaj kaptoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $date = '2026-07-03';

if $date ~~ / $<year>=(\d ** 4) '-' $<month>=(\d\d) '-' $<day>=(\d\d) / {
    say "year: $<year>, month: $<month>, day: $<day>";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [parse-date.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/parse-date.raku).

## Eligo

```
year: 2026, month: 07, day: 03
```

## Komentoj

1. `$<year>=( ... )` donas nomon al kapto. Post sukcesa kongruo, `$<year>`,
`$<month>` kaj `$<day>` tenas la kaptitajn pecojn.

1. `\d ** 4` signifas precize kvar ciferojn, do la ŝablono kongruas nur kun ĝuste
formita dato.

{% include nav.html %}
