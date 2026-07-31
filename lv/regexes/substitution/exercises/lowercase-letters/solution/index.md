---
title: 'Risinājums: Mazie burti'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $s = 'RAKU';
$s ~~ tr/A..Z/a..z/;
say $s;
```

🦋 Atrodiet programmu failā [lowercase-letters.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/lowercase-letters.raku).

## Izvade

```
raku
```

## Komentāri

1. `tr///` attēlo katru rakstzīmi pirmajā diapazonā uz rakstzīmi tajā pašā pozīcijā otrajā.

1. Šeit diapazoni iet no lielajiem burtiem uz mazajiem, tāpēc katrs lielais burts tiek aizstāts ar savu mazo partneri — pretējā virzienā nekā pārvēršana lielajos burtos.

{% include nav.html %}
