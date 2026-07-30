---
title: Werken met tijd
---

{% include menu.html %}

Wanneer je naast de datum ook de tijd van de dag nodig hebt, gebruik je het `DateTime`-type. Het wordt op vrijwel dezelfde manier aangemaakt als een `Date`, maar je geeft ook het uur, de minuut en de seconde op:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt; # 2026-06-27T14:30:00Z
```

De standaard tekstweergave volgt de ISO 8601-standaard: de datum, de letter `T`, de tijd, en een afsluitende `Z` voor de UTC-tijdzone.

Een `DateTime` geeft toegang tot de tijddelen, naast de datumdelen die je al kent:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt.hour;   # 14
say $dt.minute; # 30
```

Om het huidige moment te krijgen, roep je `DateTime.now` aan. Net als bij `Date.today` tonen we de uitvoer niet, omdat die elke keer dat het programma wordt uitgevoerd verandert.

{% include nav.html %}
