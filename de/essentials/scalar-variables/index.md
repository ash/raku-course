---
title: Skalare Variablen
---

{% include menu.html %}

Bisher hatten die Programme, die wir gesehen haben, fest codierte Textzeichenfolgen. Lassen Sie uns ein wenig Freiheit einführen und das Programm Variablen verwenden lassen.

Es gibt einige Arten von Variablen in Raku. Eine Variable ist ein Behälter, der einige Daten speichern kann. Wir beginnen mit den einfachsten Behältern, die nur einen einzigen Wert speichern können. Solche Behälter werden _Skalare_ oder skalare Variablen genannt. Eine Variable hat einen Namen, der mit einem speziellen Indikator versehen ist, der die Natur des Behälters angibt. Dieser Indikator ist ein Zeichen, das _Sigil_ genannt wird. Für skalare Behälter ist ein solches Sigil ein Dollarzeichen `$`.

Hier sind ein paar Beispiele für skalare Variablen:

```raku
$name

$age
```

{% include nav.html %}