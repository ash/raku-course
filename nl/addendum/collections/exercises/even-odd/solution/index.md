---
title: 'Oplossing: Splits in even en oneven'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @numbers = 1..10;

my @even = @numbers.grep(* %% 2);
my @odd  = @numbers.grep(* % 2);

say "even: @even[]";
say "odd: @odd[]";
```

🦋 Je kunt de broncode vinden in het bestand [even-odd.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/even-odd.raku).

## Uitvoer

```
even: 2 4 6 8 10
odd: 1 3 5 7 9
```

## Opmerkingen

1. `* %% 2` is waar voor getallen die door twee deelbaar zijn; `* % 2` is waar wanneer de
rest ongelijk aan nul is, dus oneven. Elke `grep` houdt één groep.

1. `@even[]` interpoleren met de zen-slice met lege haken drukt de elementen
gescheiden door spaties af binnen de string met dubbele aanhalingstekens.

{% include nav.html %}
