---
title: Mit Uhrzeiten arbeiten
---

{% include menu.html %}

Wenn du neben dem Datum auch die Uhrzeit benötigst, verwende den Typ `DateTime`. Er wird ähnlich wie ein `Date` erstellt, aber du gibst zusätzlich die Stunde, Minute und Sekunde an:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt; # 2026-06-27T14:30:00Z
```

Die standardmaessige Textdarstellung folgt dem ISO-8601-Standard: das Datum, der Buchstabe `T`, die Uhrzeit und ein abschliessendes `Z` für die UTC-Zeitzone.

Ein `DateTime` bietet Zugriff auf die Zeitbestandteile, zusätzlich zu den Datumsbestandteilen, die du bereits kennst:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt.hour;   # 14
say $dt.minute; # 30
```

Um den aktuellen Zeitpunkt zu erhalten, rufe `DateTime.now` auf. Wie bei `Date.today` zeigen wir die Ausgabe nicht, da sie sich bei jeder Programmausführung ändert.

{% include nav.html %}
