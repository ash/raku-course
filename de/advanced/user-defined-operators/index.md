---
title: Benutzerdefinierte Operatoren
---

{% include menu.html %}

Operatoren in Raku sind eigentlich nur Subroutinen mit speziellen Namen. Das bedeutet, du kannst deine eigenen definieren, indem du die Kategorienamen verwendest, die du auf der Seite [Typen von Raku-Operatoren](/de/advanced/operator-types) kennengelernt hast: `prefix`, `infix`, `postfix` und so weiter.

Um einen Operator zu deklarieren, schreibst du ein `sub`, dessen Name die Kategorie ist, ein Doppelpunkt und das Symbol des Operators in spitzen Klammern. Hier ist ein neuer Infix-Operator namens `plus`:

```raku
sub infix:<plus>($a, $b) {
    $a + $b
}

say 3 plus 4; # 7
```

Einmal definiert, wird `plus` zwischen seinen zwei Operanden verwendet, genau wie jeder eingebaute Infix-Operator.

Ein Postfix-Operator folgt seinem Operanden. Die Fakultät ist ein klassisches Beispiel — hier als `!`-Postfix-Operator, aufgebaut auf dem [Reduktions-Meta-Operator](/de/advanced/metaoperators/reduction), den du zuvor kennengelernt hast:

```raku
sub postfix:<!>(Int $n) {
    [*] 1..$n
}

say 5!; # 120
```

Du bist nicht auf Buchstaben und ASCII-Satzzeichen beschränkt; das Symbol eines Operators kann ein beliebiges Zeichen sein. Dieser Prefix-Operator verwendet das Paragraphenzeichen, um eine Zahl zu verdoppeln:

```raku
sub prefix:<§>($x) {
    $x * 2
}

say §5; # 10
```

Operatoren zu definieren ist ein mächtiges Werkzeug, also setze es mit Geschmack ein: Ein gut gewählter Operator kann Code wie die Problemdomäne lesbar machen, während ein obskurer nur den nächsten Leser verwirrt.

{% include nav.html %}
