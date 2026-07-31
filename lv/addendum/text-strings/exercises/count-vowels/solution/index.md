---
title: 'Risinājums: Saskaitiet patskaņus'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $text = 'Programming in Raku';

say +$text.comb(/ <[aeiouAEIOU]> /);
```

🦋 Atrodiet programmu failā [count-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/count-vowels.raku).

## Izvade

```
6
```

## Komentāri

1. Padodot `.comb` regulāro izteiksmi, tā atgriež katru atbilstošo rakstzīmi.
Rakstzīmju klase `<[aeiouAEIOU]>` uzskaita patskaņus abos reģistros.

1. Prefikss `+` iegūto sarakstu ieliek skaitliskā kontekstā, dodot tā garumu —
patskaņu skaitu.

{% include nav.html %}
