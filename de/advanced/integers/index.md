---
title: Ganzzahlen
---

{% include menu.html %}

Du hast seit dem Anfang des Kurses mit ganzen Zahlen gearbeitet. In diesem Abschnitt werden einige ihrer weniger offensichtlichen Eigenschaften betrachtet.

Die wichtigste ist, dass ganze Zahlen in Raku _beliebige Genauigkeit_ haben: Sie sind nicht auf eine feste Anzahl von Bytes beschrankt und laufen niemals stillschweigend uber. Solange genugend Speicher vorhanden ist, kann eine ganze Zahl so gross werden, wie du es brauchst:

```raku
say 2 ** 100;
# 1267650600228229401496703205376
```

Dies ist ein exakter Wert, keine Naherung. Das Gleiche gilt fur Produkte grosser Zahlen -- die Fakultat von 50 wird zum Beispiel exakt berechnet:

```raku
my $factorial = 1;
$factorial = $factorial * $_ for 1..50;
say $factorial;
# 30414093201713378043612608166064768844377641568960512000000000000
```

Um lange Zahlen im Quellcode lesbarer zu machen, kannst du die Ziffern mit Unterstrichen gruppieren. Die Unterstriche werden vom Compiler ignoriert:

```raku
say 1_000_000; # 1000000
```

Die folgenden Themen zeigen, wie man ganze Zahlen in anderen Zahlensystemen schreibt, und stellen einige nutzliche Methoden fur ganze Zahlen vor.

{% include nav.html %}
