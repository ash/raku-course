---
title: Verwendung von `unit sub`
---

{% include menu.html %}

Das Konstrukt `unit sub` ist eine praktische Möglichkeit, den Rest der Datei zum Körper der Funktion zu machen! Wenn es mit `MAIN` verwendet wird, ermöglicht es, die geschweiften Klammern, die praktisch die gesamte Datei umschließen, sowie unnötige Einrückungen loszuwerden.

Die Verwendung von `unit sub` wird im folgenden Beispiel eines Programms demonstriert.

```raku
unit sub MAIN($a, $b);

my $sum = $a + $b;
say "Die Summe von $a und $b ist $sum.";
```

Die `MAIN`-Funktion ist die einzige Funktion in dieser Datei. Wenn dies auch für Ihr Programm der Fall ist, sollten Sie die Verwendung von `unit sub MAIN` wie oben gezeigt in Betracht ziehen.

{% include nav.html %}