---
title: 'Risinājums: Vienums vai saraksts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @a = 1, 2, 3;
my $count = 0;

my $x = $(@a);
$count++ for @($x);
say $count;
```

🦋 Atrodiet programmu failā [item-or-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/item-or-list.raku).

## Izvade

```
3
```

## Komentāri

1. `my $x = $(@a)` uzspiež elementa kontekstu, tāpēc viss masīvs tiek iepakots vienā skalārā `$x`, nevis izklāts.

1. `@($x)` pēc tam uzspiež saraksta kontekstu, izklājot `$x` atpakaļ tā trijos elementos. Tāpēc cikls `for` izpildās trīs reizes un skaitītājs paliek uz `3`. Abi kontekstualizatori ir precīzi pretstati: `$( )` iepako sarakstu vienā elementā, `@( )` to atkal izpako.

{% include nav.html %}
