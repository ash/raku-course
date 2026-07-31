---
title: Zeichenketten
---

{% include menu.html %}

Im Essentials-Teil hast du gelernt, [wie man Strings erstellt](/de/essentials/strings) — Verkettung, Interpolation und die Länge eines Strings. Strings verfügen auch über eine reichhaltige Sammlung von Methoden. Dieser Abschnitt stellt die nützlichsten vor. (Die Suche mit [regulaeren Ausdrücken](/de/regexes) ist ein eigenes, größeres Thema, das später in einem separaten Teil behandelt wird.)

Drei Methoden ändern die Gross- und Kleinschreibung eines Strings:

```raku
say 'raku'.uc; # RAKU  — upper case
say 'RAKU'.lc; # raku  — lower case
say 'raku'.tc; # Raku  — title case (first letter capitalised)
```

Die Methode `flip` kehrt die Zeichen eines Strings um:

```raku
say 'Raku'.flip; # ukaR
```

Und der Operator `x` wiederholt einen String eine bestimmte Anzahl von Malen:

```raku
say 'ab' x 3; # ababab
```

Die folgenden Themen zeigen, wie man innerhalb von Strings sucht und wie man sie in Teile zerlegt und wieder zusammenfügt.

{% include nav.html %}
