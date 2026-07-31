---
title: 'Solutio: Diem per capturas nominatas analysa'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $date = '2026-07-03';

if $date ~~ / $<year>=(\d ** 4) '-' $<month>=(\d\d) '-' $<day>=(\d\d) / {
    say "year: $<year>, month: $<month>, day: $<day>";
}
```

🦋 Inveni codicem fontem in archivo [parse-date.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/parse-date.raku).

## Exitus

```
year: 2026, month: 07, day: 03
```

## Commentarii

1. `$<year>=( ... )` capturae nomen dat. Post congruentiam felicem, `$<year>`,
`$<month>` et `$<day>` partes captas tenent.

1. `\d ** 4` exacte quattuor cifras significat, itaque exemplar solum diei recte
formatae congruit.

{% include nav.html %}
