---
title: Datumsarithmetik
---

{% include menu.html %}

Daten unterstuetzen Arithmetik, was viele alltaegliche Berechnungen einfach macht.

Wenn du eine ganze Zahl zu einem Datum addierst, wird es um diese Anzahl von Tagen nach vorne verschoben. Das Ergebnis ist ein neues Datum, wobei Monat und Jahr automatisch angepasst werden:

```raku
say Date.new(2026, 6, 27) + 7; # 2026-07-04
```

Wenn du ein Datum von einem anderen subtrahierst, erhaeltst du die Anzahl der Tage zwischen ihnen:

```raku
say Date.new(2026, 7, 4) - Date.new(2026, 6, 27); # 7
```

Fuer größere Schritte akzeptieren die Methoden `later` und `earlier` benannte Argumente wie `:days`, `:months` oder `:years`:

```raku
say Date.new(2026, 6, 27).later(:days(10));    # 2026-07-07
say Date.new(2026, 6, 27).earlier(:months(2)); # 2026-04-27
```

Diese Methoden halten die Arithmetik über Monats- und Jahresgrenzen hinweg korrekt, sodass du dir nie Gedanken darüber machen musst, wie viele Tage ein bestimmter Monat hat.

{% include nav.html %}
