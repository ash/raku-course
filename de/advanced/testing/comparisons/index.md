---
title: Vergleiche und Pläne
---

{% include menu.html %}

Über `ok` und `is` hinaus bietet das `Test`-Modul Vergleiche für verschiedene Arten von Werten. Die nützlichsten sind:

* `is` — vergleicht zwei Werte auf Gleichheit (als Strings/Zahlen)
* `is-deeply` — vergleicht zwei Datenstrukturen auf exakte, typbewusste Gleichheit
* `like` — prüft, ob ein String zu einer Regex passt
* `isnt` — wird bestanden, wenn zwei Werte **nicht** gleich sind

`is-deeply` ist die richtige Wahl für Arrays, Hashes und verschachtelte Daten, weil es Struktur und Typ genau vergleicht:

```raku
use Test;

my @reversed = (1, 2, 3).reverse;
is-deeply @reversed, [3, 2, 1], 'reversed';

done-testing;
```

Dies gibt aus:

```
ok 1 - reversed
1..1
```

Während `is` die Werte in Strings umwandeln und lose vergleichen würde, besteht `is-deeply` darauf, dass die Strukturen wirklich übereinstimmen. Beachte, dass `done-testing` den Plan `1..1` am Ende ausgibt, nach der Prüfung.

Anstatt `done-testing` die Tests für dich zählen zu lassen, kannst du die Anzahl mit `plan` im Voraus angeben. Dies schützt vor einer Testdatei, die vorzeitig beendet wird und stillschweigend Prüfungen überspringt:

```raku
use Test;

plan 2;
ok True,  'first';
ok 1 < 2, 'second';
```

Diesmal kommt der Plan **zuerst**, vor den Ergebnissen:

```
1..2
ok 1 - first
ok 2 - second
```

Das ist der sichtbare Unterschied zu `done-testing`: `plan` gibt die Anzahl `1..2` oben aus, bevor irgendeine Prüfung läuft, während `done-testing` sie ganz am Ende ausgibt. In jedem Fall erwartet `plan 2` genau zwei Tests; wenn tatsächlich weniger (oder mehr) ausgeführt werden, wird die Suite als fehlgeschlagen gemeldet. Verwende `plan`, wenn die Anzahl fest und bekannt ist, und `done-testing`, wenn es einfacher ist, das Framework zählen zu lassen.

{% include nav.html %}
