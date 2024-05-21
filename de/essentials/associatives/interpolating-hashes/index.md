---
title: Interpolating hashes
---

{% include menu.html %}

Um Array-Elemente in doppelt-quotierten Zeichenketten zu interpolieren, schreiben Sie sie so, wie Sie es im Programm selbst tun: `%data<FR>`. Um den gesamten Hash zu interpolieren, fügen Sie ein Paar leerer Winkel- oder geschweifter Klammern hinzu: `@data{}`. Das folgende Programm illustriert diesen Ansatz:

```raku
my %data = FR => 'Paris', IT => 'Rome';

say "%data<FR>";
say "%data<>";

# Oder:
# say "%data{}";
```

Dieses Programm gibt die angeforderten Daten aus:

```console
$ raku t.raku
Paris
FR	Paris
IT	Rome
```

Beachten Sie, dass das Drucken des gesamten Hashes mehrzeilige Ausgaben erzeugen kann.

{% include nav.html %}