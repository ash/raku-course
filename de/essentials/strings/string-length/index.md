---
title: String length in Raku
---

{% include menu.html %}

Die Unicode-Natur der Zeichenketten macht einige triviale Dinge etwas schwieriger. Oder zumindest muss man es als weniger geradliniges Thema betrachten. Nehmen wir zum Beispiel die Länge einer Zeichenkette. Ist es die Anzahl der Zeichen oder die Anzahl der Bytes? Oder was, wenn dasselbe Zeichen in verschiedenen Zeichenketten unterschiedlich zerlegt wird, ist es dann immer noch ein Zeichen?

## Länge in Zeichen

Um die Länge der Zeichenkette in Zeichen zu erhalten, verwenden Sie die _Methode_ `chars`:

```raku
my $str = '你好世界';
say $str.chars;
```

Während wir später über Methoden sprechen werden, sollten wir sie bereits jetzt verwenden können. In Raku können Sie Methoden auf fast jedem Objekt aufrufen, einschließlich Zeichenketten und Skalaren. Um eine Methode aufzurufen, verwenden Sie einen Punkt. Hier sehen wir also die Methode, die auf einer Variablen aufgerufen wird, die eine Zeichenkette enthält: `$str.chars`.

Es gibt vier Zeichen in diesem chinesischen Gruß 你好世界. Und `$str.chars` gibt genau `4` zurück.

## Länge in Bytes

Nur zur Referenz, so erhalten Sie die Länge der Zeichenkette in Bytes. In diesem Fall ist es wichtig zu wissen, welche Kodierung verwendet wird, um die Zeichenkette zu speichern:

```raku
my $str = '你好世界';
say $str.encode('UTF-8').bytes;
```

Dieses Mal gibt das Programm `12` aus. Beachten Sie, dass wir hier zwei verkettete Methodenaufrufe in der zweiten Zeile haben.

## Länge in Codepunkten

Nur der Vollständigkeit halber, hier ist eine weitere nützliche Methode, die sich auch auf die Länge von Zeichenketten bezieht: `codes`. Sie gibt die Anzahl der Codepunkte in der Zeichenkette zurück, nachdem sie normalisiert wurde. In vielen Fällen geben `codes` und `chars` dasselbe zurück. In einigen seltenen Fällen, wenn Sie beispielsweise ein 'unmögliches' Zeichen erstellt haben, für das es keinen einzelnen Codepunkt im gesamten Unicode-Raum gibt, geben die Methoden unterschiedliche Ergebnisse zurück.

```raku
say 'x̨'.chars;
say 'x̨'.codes;
```

Dieses Zeichen, `x̨`, hat keinen eigenen Codepunkt und kann nur aus den beiden Teilen konstruiert werden: dem Kleinbuchstaben `x` und dem kombinierenden Zeichen `0x0328`. Es gibt also immer noch ein Zeichen, aber zwei Codepunkte. Das Programm gibt also aus:

    1
    2

{% include nav.html %}