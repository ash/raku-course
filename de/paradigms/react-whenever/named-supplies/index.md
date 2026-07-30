---
title: Anderswo definierte Supplies
translations_gpt:
---

{% include menu.html %}

Jedes `whenever` bisher hat sein Supply gleich im Kopf erzeugt — `whenever Supply.from-list(...)`. Das liest sich für ein schnelles Beispiel gut, doch echte Programme haben ihre Ereignisquelle selten genau an dieser Stelle zur Hand. Häufiger wird ein Supply anderswo gebaut — von einer Funktion geliefert, von einem `Supplier` erzeugt oder Ihnen von einem Socket oder einem Zeitgeber überreicht — und kommt als gewöhnliche Variable an. Ein `whenever` beobachtet ebenso bereitwillig ein benanntes Supply:

```raku
my $sensors  = Supply.from-list(18, 21, 19);
my $messages = Supply.from-list('hi', 'bye');

react {
    whenever $sensors {
        say "temperature: $_";
    }
    whenever $messages {
        say "message: $_";
    }
}
```

Das gibt aus:

```
temperature: 18
temperature: 21
temperature: 19
message: hi
message: bye
```

Lesen Sie `whenever $sensors { … }` also als „wann immer das Supply `$sensors` — woher es auch stammt — einen Wert aussendet, führe diesen Rumpf aus“. Das inline stehende `whenever Supply.from-list(...)` von zuvor ist nur der Sonderfall, in dem die Quelle zufällig an Ort und Stelle erzeugt wird.

Wenn Sie diese Form aus äußerem Block mit inneren Blöcken an etwas erinnert, haben Sie recht — die [nächste Seite](/de/paradigms/react-whenever/whenever-vs-when) vergleicht sie mit `given`/`when`.

{% include nav.html %}
