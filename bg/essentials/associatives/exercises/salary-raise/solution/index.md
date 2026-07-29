---
title: 'Solution: Увеличение на заплата'
---

{% include menu.html %}

Програмата трябва да актуализира една от стойностите на дадения хеш. Присвояването на нова стойност не се различава много от задаването на нова стойност на скаларна променлива.

## Код

Ето решението:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;

my $raise = 5; # в проценти

%employee<salary> *= (1 + $raise / 100);
say "New salary of %employee<full-name>: %employee<salary>";
```

🦋 Намерете програмата във файла [salary-raise.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/salary-raise.raku).

## Изход

Когато стартирате програмата, уверете се, че сте направили валидни изчисления и сте конвертирали броя на процентите правилно.

```console
$ raku exercises/associatives/salary-raise.raku
New salary of Eliza Vents: 3150
```

{% include nav.html %}