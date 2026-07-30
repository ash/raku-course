---
title: Das Match-Objekt
translations_gpt:
---

{% include menu.html %}

Wenn ein Regex trifft, liefert der Smartmatch ein _Match-Objekt_. Dasselbe Objekt wird außerdem selbsttätig in der besonderen Variablen `$/` abgelegt, die manchmal „die Match-Variable“ genannt wird.

Das Match-Objekt ist weit mehr als eine Ja-oder-Nein-Antwort. Als Zeichenkette ist es der getroffene Text — entweder über die Methode `.Str` oder über das Präfix `~`, den Operator zur Zeichenketten-Umwandlung, der genau dasselbe tut:

```raku
my $m = 'concatenate' ~~ /cat/;
say $m.Str; # cat
say ~$m;    # cat
```

Es weiß auch, **wo** in der Zeichenkette der Treffer gefunden wurde. Die Methode `.from` liefert die Position, an der er beginnt, und `.to` die Position direkt hinter seinem Ende:

```raku
my $m = 'room 7 left' ~~ /\d/;
say $m.Str;  # 7
say $m.from; # 5
say $m.to;   # 6
```

Positionen werden ab null gezählt, die Ziffer `7` steht also an Index `5`.

Wenn der Regex **nicht** trifft, ist das Ergebnis gar kein Match-Objekt — es ist der besondere Wert `Nil`. `Nil` einem Skalar zuzuweisen lässt ihn undefiniert:

```raku
my $m = 'abc' ~~ /z/;
say $m.defined; # False
```

Sie können also stets `.defined` prüfen (oder den Wert einfach in einem Wahrheitszusammenhang verwenden), bevor Sie den getroffenen Text lesen.

{% include nav.html %}
