---
title: make und made
translations_gpt:
---

{% include menu.html %}

Statt die Werte hinterher aus dem Baum zu graben, können Sie **während** des Zerlegens einen Wert an einen Treffer hängen. Im Rumpf eines Tokens dürfen Sie einen _Codeblock_ einbetten — ein inneres `{ … }`, zwischen das Muster geschrieben —, das läuft, sobald das Treffen dort ankommt. Innerhalb dieses Blocks legt die Funktion `make` einen Wert auf dem aktuellen Treffer ab:

```raku
grammar OneNum {
    token TOP    { <number> { make $<number>.Int } }
    token number { \d+ }
}
```

Wenn `TOP` trifft, läuft der innere Block `{ make $<number>.Int }` — die äußeren geschweiften Klammern sind nur der Rumpf des Tokens — und legt die ganze Zahl auf dem Treffer ab. Sie lesen sie hinterher mit `made` aus (oder mit dessen Alias `.ast`):

```raku
say OneNum.parse('42').made; # 42
```

Weil wir `$<number>.Int` abgelegt haben, ist der von `made` gelieferte Wert ein echter `Int` — die Zahl selbst, nicht das Match-Objekt:

```raku
say OneNum.parse('42').made + 1; # 43
```

Beachten Sie, dass dieses `+ 1` auch ohne das `.Int` `43` ergäbe, denn ein Treffer wird in der Rechnung zu seinen Ziffern. Der Sinn des `.Int` ist, dass der *abgelegte* Wert wirklich eine Zahl **ist** — und das wollen Sie, sobald er in einer Datenstruktur landet oder weitergereicht wird, statt der blanke Treffer.

Der abgelegte Wert kann alles sein — eine Zahl, eine Zeichenkette, ein Array, ein Objekt. Ein Token kann auch die Werte verbinden, die seine Unter-Tokens gemacht haben. Etwa zwei gecapturte Zahlen summieren:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Sum.parse('2+3').made; # 5
```

`make` und `made` sind die Brücke von „es hat getroffen“ zu „hier ist die Bedeutung“. Die Blöcke inline zu setzen funktioniert, mischt aber das Muster mit der Logik; der nächste Abschnitt verlagert diese Logik in eine eigene [_Aktionsklasse_](/de/regexes/action-classes).

{% include nav.html %}
