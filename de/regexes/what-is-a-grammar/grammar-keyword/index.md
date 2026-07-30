---
title: Das Schlüsselwort grammar
translations_gpt:
---

{% include menu.html %}

Eine _Grammatik_ fasst benannte Regexes unter einem Namen zusammen, ganz ähnlich wie eine Klasse Methoden zusammenfasst. Sie deklarieren sie mit dem Schlüsselwort `grammar`:

```raku
grammar Greeting {
    token TOP  { 'Hello, ' <name> '!' }
    token name { \w+ }
}
```

Innerhalb der Grammatik wird jedes benannte Muster mit `token` geschrieben (einer Art Regex, die Sie gleich ausführlich kennenlernen). Ein Token, das üblicherweise `TOP` heißt, ist der Ausgangspunkt — es beschreibt das Ganze. Hier sagt `TOP`: „der Text ist `Hello, `, dann ein Name, dann `!`“, und `name` sagt, wie ein Name aussieht.

Die Tokens können sich gegenseitig namentlich aufrufen, genau wie die [benannten Regexes](/de/regexes/what-is-a-grammar/named-regexes) des vorigen Themas. `TOP` verwendet `<name>`, was die Grammatik lesbar hält: Jede Regel hat eine klare Aufgabe.

Um eine Grammatik auf eine Zeichenkette anzuwenden, rufen Sie ihre Methode `.parse` auf:

```raku
my $m = Greeting.parse('Hello, Anna!');
say $m<name>; # ｢Anna｣
```

Der nächste Abschnitt betrachtet `TOP` und `.parse` genauer. Für den Augenblick ist der Gedanke einfach: **Eine Grammatik ist eine benannte Sammlung benannter Regexes, die zusammen ein ganzes Stück strukturierten Text beschreiben.**

{% include nav.html %}
