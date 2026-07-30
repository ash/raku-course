---
title: Datum en tijd
---

{% include menu.html %}

Raku heeft ingebouwde typen om te werken met kalenderdatums en kloktijden. Een kalenderdatum wordt weergegeven door het `Date`-type. Je maakt er een aan door het jaar, de maand en de dag op te geven:

```raku
my $d = Date.new(2026, 6, 27);
say $d; # 2026-06-27
```

Zodra je een datum hebt, kun je de onderdelen ervan uitlezen:

```raku
my $d = Date.new(2026, 6, 27);
say $d.year;  # 2026
say $d.month; # 6
say $d.day;   # 27
```

De methode `day-of-week` geeft aan op welke dag van de week de datum valt, genummerd van `1` voor maandag tot `7` voor zondag:

```raku
say Date.new(2026, 6, 27).day-of-week; # 6
```

De 27e juni 2026 is een zaterdag, dus het resultaat is `6`.

De methode `is-leap-year` geeft aan of de datum in een schrikkeljaar valt:

```raku
say Date.new(2024, 1, 1).is-leap-year; # True
say Date.new(2026, 1, 1).is-leap-year; # False
```

Om de datum van vandaag te krijgen, roep je `Date.today` aan. We tonen de uitvoer hier niet, omdat die afhangt van de dag waarop je het programma uitvoert.

{% include nav.html %}
