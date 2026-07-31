---
title: 'Risinājums: Visi skaitļi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @numbers = 'x=5, y=10, z=15' ~~ m:g/\d+/;
say @numbers.map(*.Str).join('+');
```

🦋 Atrodiet programmu failā [all-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/all-numbers.raku).

## Izvade

```
5+10+15
```

## Komentāri

1. `\d+` piemeklē veselu ciparu virteni, un `:g` savāc katru tādu virteni — šeit `5`, `10` un `15`.

1. Katra sakritība ir sakritības objekts, tāpēc `.map(*.Str)` tos pārvērš vienkāršās virknēs, pirms tos savieno ar `+`.

{% include nav.html %}
