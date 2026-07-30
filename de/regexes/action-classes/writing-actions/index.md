---
title: Eine Aktionsklasse schreiben
translations_gpt:
---

{% include menu.html %}

Eine Aktionsklasse ist eine gewöhnliche Klasse mit einer Methode je Grammatiktoken. Jede Methode erhält den Treffer für dieses Token als `$/` und ruft `make` auf, um einen Wert anzuhängen — genau das, was der inline stehende Block getan hat, nur getrennt vom Muster gehalten:

```raku
grammar Sum {
    token TOP { <a> '+' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class SumActions {
    method TOP($/) { make $<a>.made + $<b>.made }
    method a($/)   { make $/.Int }
    method b($/)   { make $/.Int }
}
```

Die Grammatik enthält nun nur noch das Muster; alle Bedeutung lebt in `SumActions`. Beachten Sie, wie die Methoden zusammenspielen: `a` und `b` `make`-n je eine ganze Zahl, und `TOP` liest diese mit `$<a>.made` und `$<b>.made` und macht ihre Summe.

Um die Aktionsklasse zu verwenden, übergeben Sie `.parse` mit dem benannten Argument `actions` eine Instanz und lesen danach das oberste Ergebnis mit `.made`:

```raku
say Sum.parse('2+3', actions => SumActions.new).made; # 5
```

Während die Grammatik zerlegt, läuft die Methode jedes Tokens selbsttätig und baut den Wert von unten nach oben auf. Das Ergebnis am obersten Treffer ist der Wert, den Sie wollen — hier die Zahl `5`.

{% include nav.html %}
