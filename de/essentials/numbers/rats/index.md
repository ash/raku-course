---
title: Rationale Zahlen in Raku
---

{% include menu.html %}

Rationale Zahlen sind ein einzigartiges Merkmal von Raku. Der `Rat`-Datentyp repräsentiert solche Zahlen.

Intern sind rationale Zahlen Brüche mit zwei ganzzahligen Teilen: Zähler und Nenner. So können Sie Zahlen wie 1/3 problemlos darstellen, ohne an Präzision zu verlieren.

Es gibt einige Möglichkeiten, eine `Rat`-Zahl in einem Raku-Programm zu schreiben:

```raku
my $x = 1/2;
my $y = <2/3>;
```

Beachten Sie, dass der Schrägstrich hier Teil der Notation ist. Es ist kein Divisionsoperator, daher bedeutet `1/2` nicht, dass Sie 1 durch 2 teilen. Beim Ausdrucken werden rationale Zahlen jedoch als Dezimalzahlen oder ganze Zahlen angezeigt:

```raku
say 1/2; # 0.5
say 3/4; # 0.75
```

Der Teil der Zeile nach dem `#`-Symbol ist ein Kommentar und wird vom Compiler ignoriert. Solche Kommentare werden im Kurs verwendet, um die Ausgabe des Programms zu zeigen.

## Dezimalform

Es ist wichtig zu verstehen, dass, wenn Sie die Zahl in Dezimalform schreiben, z.B. `0.5`, Raku an diesem Punkt eine `Rat`-Zahl erstellt. Es ist keine ganze Zahl, aber es ist auch keine Gleitkommazahl (`float` oder `double` in anderen Sprachen). Es ist immer noch eine rationale Zahl!

Betrachten Sie das folgende Beispiel:

```raku
say 0.1 + 0.2 - 0.3;
```

Wenn eine Programmiersprache Gleitkommaarithmetik für diese Berechnungen verwendet, wird das Ergebnis nicht gleich 0 sein. Die Website [0.30000000000000004.com](https://0.30000000000000004.com) gibt eine umfassende Liste von Beispielen, bei denen die Gleitkommaarithmetik kein erwartetes Ergebnis liefert.

Aber Raku gibt genau `0` aus. Dies geschieht, weil es die Zahlen `0.1`, `0.2` und `0.3` als rationale Zahlen behandelt und sie intern als `1/10`, `2/10` und `3/10` speichert. Führen Sie es von der Kommandozeile aus, um es zu bestätigen:

```console
$ raku -e 'say 0.1 + 0.2 - 0.3'
0
```

## Unicode-Formen

Es ist auch möglich, Unicode-Zeichen zu verwenden, die die Brüche darstellen, wie `½` oder `¼` oder `¾`. Wahrscheinlich ist es nicht immer einfach, diese mit der Tastatur einzugeben, aber diese Brüche sind genau die gleichen Werte wie ihre ASCII-Versionen, die als Bruch oder als Dezimalzahl geschrieben sind:

`½` | `1/2` | `<1/2>` | `0.5`
`¼` | `1/4` | `<1/4>` | `0.25`
`¾` | `3/4` | `<3/4>` | `0.75`

Bei einigen Brüchen, wie `1/3`, haben Sie weniger Optionen, `⅓` oder `<1/3>`, da die Dezimalform eine unendliche Anzahl von Ziffern erfordern würde.

{% include nav.html %}