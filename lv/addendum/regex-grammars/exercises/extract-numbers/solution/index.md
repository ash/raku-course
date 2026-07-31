---
title: 'Risinājums: Izgūstiet un saskaitiet skaitļus'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $text = 'order 12 apples, 3 pears and 25 plums';

my @numbers = $text.comb(/\d+/);

say "numbers: @numbers[]";
say "sum: { [+] @numbers }";
```

🦋 Atrodiet programmu failā [extract-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/extract-numbers.raku).

## Izvade

```
numbers: 12 3 25
sum: 40
```

## Komentāri

1. Padodot `.comb` regulāro izteiksmi `/\d+/`, tā atgriež katru ciparu virteni kā
atsevišķu virkni, ignorējot vārdus pa vidu.

1. `[+] @numbers` tos saskaita, pa ceļam ciparu virknes pārvēršot skaitļos.

{% include nav.html %}
