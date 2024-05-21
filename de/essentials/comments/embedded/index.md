---
title: Eingebettete Kommentare
---

{% include menu.html %}

Eingebettete oder Inline-Kommentare haben die gleiche Form wie mehrzeilige Kommentare, mit dem einzigen Unterschied, dass sie zwischen anderen Teilen des Programms platziert werden. Zum Beispiel:

```raku
my $name;
$name = #`[Hier wird Benutzereingabe erwartet] prompt 'Wie heißt du? ';
say $name;
```

Ein guter Syntax-Highlighter hilft sehr dabei, die Kommentare zu visualisieren.

{% include nav.html %}