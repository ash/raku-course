---
title: Das Test-Modul
---

{% include menu.html %}

Lade die Testwerkzeuge mit `use Test`. Die grundlegendste Prüfung ist `ok`, die bestanden wird, wenn ihre Bedingung wahr ist. Jede Prüfung nimmt eine optionale Beschreibung entgegen:

```raku
use Test;

ok 1 == 1, 'one equals one';
ok 2 > 1,  'two is greater';

done-testing;
```

Die Ausführung gibt Folgendes im Standardtestformat namens _TAP_ aus:

```
ok 1 - one equals one
ok 2 - two is greater
1..2
```

Jede bestandene Prüfung wird als `ok` mit ihrer Nummer und Beschreibung ausgegeben; eine fehlgeschlagene wäre `not ok`. Das abschließende `1..2` ist der _Plan_, der angibt, wie viele Tests ausgeführt wurden. Der Aufruf von `done-testing` am Ende gibt diesen Plan automatisch aus.

Wenn du einen bestimmten Wert erwartest, ist `is` klarer als `ok`, weil es bei einem Fehlschlag sowohl den erwarteten als auch den tatsächlichen Wert ausgibt:

```raku
use Test;

is 2 + 2, 4, 'addition works';

done-testing;
```

Dies gibt `ok 1 - addition works` aus. Um diese Berichterstattung in Aktion zu sehen, gib `is` eine falsche Erwartung:

```raku
use Test;

is 2 + 2, 5, 'addition works';

done-testing;
```

Jetzt schlägt die Prüfung fehl, und die Ausgabe erklärt genau, warum:

```
not ok 1 - addition works
# Failed test 'addition works'
# at test.raku line 3
# expected: '5'
#      got: '4'
1..1
# You failed 1 test of 1
```

Die Zeile `not ok` markiert den Fehlschlag, und die darunterliegenden Diagnosezeilen zeigen, was erwartet wurde im Vergleich zu dem, was tatsächlich herauskam — deshalb ist `is` hilfreicher als ein bloßes `ok`, wenn ein bestimmter Wert wichtig ist.

`ok`, `is` und `done-testing` reichen bereits aus, um eine nützliche Testdatei zu schreiben; das nächste Thema fügt [die anderen Vergleichsarten](/de/advanced/testing/comparisons) hinzu.

{% include nav.html %}
