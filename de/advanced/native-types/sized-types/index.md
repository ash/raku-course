---
title: Typen mit fester Größe und Überlauf
---

{% include menu.html %}

Neben dem einfachen `int` bietet Raku Ganzzahlen mit fester Bitbreite: `int8`, `int16`, `int32`, `int64` und ihre vorzeichenlosen Gegenstücke `uint8`, `uint16`, `uint32`, `uint64`. Die Zahl gibt an, wie viele Bits der Wert belegt.

Eine feste Breite bedeutet einen festen Bereich. Ein `int8` fasst Werte von `-128` bis `127`; ein `uint8` fasst `0` bis `255`. Da der Speicher nicht wachsen kann, führt das Überschreiten des oberen Endes zu einem Umlauf zum unteren Ende — das ist ein _Überlauf_:

```raku
my int8 $i = 127;
$i++;
say $i; # -128
```

Das Addieren von Eins zum größten `int8` ergibt nicht `128` (das würde nicht hineinpassen), sondern es springt zum kleinsten Wert, `-128`. Vorzeichenlose Typen haben ebenfalls einen Umlauf:

```raku
my uint8 $u = 255;
$u++;
say $u; # 0
```

Das ist das Gegenteil eines normalen `Int`, der einfach so groß wird wie nötig und niemals überläuft. Der Kompromiss ist genau der Sinn von nativen Typen mit fester Größe: Du akzeptierst einen festen Bereich im Austausch für vorhersagbaren, kompakten und schnellen Speicher.

Verwende einen nativen Typ mit fester Größe, wenn du den Bereich deiner Daten kennst und die Effizienz möchtest — zum Beispiel Bytes von Binärdaten in einem `uint8`-Array. Für gewöhnliche Arithmetik, bei der Zahlen unbegrenzt wachsen können, bleibe bei `Int`.

{% include nav.html %}
