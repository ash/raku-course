---
title: Hinweise zur Verwendung von Unicode
---

{% include menu.html %}

Raku geht davon aus, dass alle Ihre Programmdateien als UTF-8-Dateien gespeichert sind. Aus praktischer Sicht bedeutet das, dass Sie sich keine Sorgen um Nicht-ASCII-Zeichen in beispielsweise Zeichenkettenliteralen machen müssen. Aber das ist noch nicht alles. Höchstwahrscheinlich müssen Sie sich auch keine Sorgen machen, wenn Ihr Programm eine Textdatei liest, die ebenfalls eine UTF-8-Datei ist. Es bedeutet auch, dass die Zeichenlänge korrekt als Anzahl der Zeichen und nicht als Anzahl der Bytes erkannt wird. (Wir werden später einen detaillierteren Blick darauf werfen.)

Das nächste, was Sie wissen möchten, ist, dass Sie nicht-lateinische oder nicht-englische Buchstaben für Bezeichner verwenden können. Sie können Ihre Variable `$ι` anstelle von `$i` benennen, wenn Sie dies bevorzugen, und der Compiler wird sie korrekt parsen.

Raku behandelt die Unicode-Eigenschaften der Zeichen pedantisch genug. Zum Beispiel weiß es nicht nur, ob ein Zeichen ein Buchstabe oder eine Ziffer ist, sondern erkennt auch korrekt Paarzeichen wie Klammern oder verschiedene Arten von Klammern. In vielen Fällen können Sie für verschiedene Teile des Programms unterschiedliche Arten von Klammern wählen. Beispielsweise können Sie unser „Hello, World!“-Programm so ändern, dass diese nicht-lateinischen Anführungszeichen verwendet werden (Sie werden sie wiedersehen, wenn wir mit Raku-Grammatiken arbeiten):

```raku
say ｢Hello, World!｣;
```

Einige eingebaute Operatoren haben zwei Formen: eine Unicode- und eine ASCII-Version. Zum Beispiel kann man einen negierten Vergleich als `!=` oder als `≠` schreiben. Dasselbe gilt für Mengenoperationen: zum Beispiel hat `∈` ein reines ASCII-Äquivalent `(elem)`. Oder es gibt eine eingebaute Konstante, auf die Sie als `pi` oder `π` verweisen können.

Beim Arbeiten mit Zahlen können Sie wählen, Brüche in der Form von `½` anstelle von `0.5` zu verwenden. Oder das Quadrat von `$x` als `$x²` unter Verwendung eines hochgestellten Zeichens auszuwerten.

Die vollständige Liste solcher Paare finden Sie auf der folgenden Dokumentationsseite: 📖 [Unicode versus ASCII-Symbole](https://docs.raku.org/language/unicode_ascii).

{% include nav.html %}