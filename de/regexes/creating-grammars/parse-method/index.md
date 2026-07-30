---
title: Zerlegen mit parse
translations_gpt:
---

{% include menu.html %}

Um eine Grammatik auszuführen, rufen Sie ihre Methode `.parse` mit der zu untersuchenden Zeichenkette auf:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

`.parse` liefert ein Match-Objekt, wenn die Grammatik die **gesamte** Zeichenkette trifft, und `Nil`, wenn nicht. Weil die ganze Eingabe treffen muss, sind die Anker `^` und `$` nicht nötig — `.parse` fügt diese Bedingung für Sie hinzu:

```raku
say Pair.parse('x=5').defined; # True
say Pair.parse('x=').defined;  # False
```

Das [Match-Objekt](/de/regexes/matching/match-object) funktioniert genau wie jene, die Ihnen früher begegnet sind. Jedes in der Grammatik verwendete Token wird zu einem benannten Capture, `$m<key>` und `$m<value>` liefern also die getroffenen Teile. Die Tokens verschachteln sich, eine Grammatik baut also einen kleinen Baum aus Treffern — das Thema eines späteren Abschnitts.

{% include nav.html %}
