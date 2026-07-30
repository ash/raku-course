---
title: Autothreading
translations_gpt:
---

{% include menu.html %}

Wenn Sie eine Junction an etwas übergeben, das einen einzelnen Wert erwartet — einen Vergleich oder eine gewöhnliche Funktion —, wendet Raku diese Operation im Stillen auf **jeden** Wert hinter der Junction an und fügt die Ergebnisse wieder zu einer Junction zusammen. Das heißt _Autothreading_.

Zu einer Junction zu addieren addiert etwa zu jedem ihrer Werte:

```raku
my $j = 1 | 2 | 3;
say $j + 10; # any(11, 12, 13)
```

Das `+ 10` wurde einzeln auf `1`, `2` und `3` angewandt, was eine neue _any_-Junction `any(11, 12, 13)` ergibt.

Bei einem Vergleich klappt das zusammengefügte Ergebnis gemäß der Art der Junction zu einem einzelnen Wahrheitswert zusammen:

```raku
say so all(3, 7, 2) > 0;  # True  — every value is positive
say so all(3, -1, 2) > 0; # False — not all are positive
say so none(1, 2, 3) == 5; # True — none of them is 5
```

Autothreading ist es, was Junctions so knapp macht: Ein Vergleich prüft viele Werte. Dem Wesen nach sind die Prüfungen unabhängig, Raku darf sie also nebenläufig ausführen — weshalb Junctions ganz natürlich in die Werkzeugkiste für Nebenläufigkeit gehören.

{% include nav.html %}
