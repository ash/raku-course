---
title: Lösung von 'True und False Strings'
---

{% include menu.html %}

Diese Übung ähnelt [der vorherigen](../../true-false-numbers), aber diesmal ist die Aufgabe etwas kniffliger. Es gibt mehr 'verdächtige' Zeichenketten, die als `False` behandelt werden können. Lassen Sie uns diese erkunden.

```raku
say ?'';

say ?' ';
say ?'        ';

say ?"\n";

say ?'0';
say ?'0.0';
```

Von all diesen wird nur die leere Zeichenkette als `False` gewertet. Alle anderen Zeichenketten, selbst diejenigen, die nur Leerzeichen oder das explizite Zeichen `0` enthalten, werden zu `True`.

🦋 Sie können das vollständige Programm mit dem obigen Beispiel in der Datei [true-false-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/true-false-strings.raku) finden.

{% include nav.html %}