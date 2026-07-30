---
title: Proxierung von Methodenaufrufen
---

{% include menu.html %}

Ein Skalar-Container zu sein bedeutet eigentlich, ein Objekt des Typs `Scalar` zu sein. In den meisten Fällen ist die Verwendung von Skalaren so transparent, dass ein Entwickler überhaupt nicht an den Container denken muss und sich vorstellen kann, direkt mit den darin gespeicherten Werten zu arbeiten.

Das funktioniert, weil ein Skalar-Container Methodenaufrufe an den Wert weiterleitet, den er enthält. Zum Beispiel kannst du nach der Zuweisung `my $lang = 'Raku'` die Methode `.chars` auf der Variable aufrufen:

```raku
my $lang = 'Raku';
say $lang.chars; # 4
```

Das Programm gibt `4` aus, was die Anzahl der Zeichen im String `'Raku'` ist. Das Ergebnis ist genau dasselbe, als ob du `.chars` direkt auf dem Stringwert aufrufen würdest, statt auf der Containervariable:

```raku
say 'Raku'.chars; # 4
```

Mit anderen Worten: Der Container leitet den `.chars`-Aufruf still an den String weiter, den er enthält, und gibt dir das Ergebnis zurück.

{% include nav.html %}
