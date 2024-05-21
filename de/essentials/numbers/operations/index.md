---
title: Operationen mit Zahlen
---

{% include menu.html %}

Es besteht kein Zweifel, dass Sie bereits einige der Operationen kennen, die Sie mit Raku-Zahlen durchführen können. Nur um zu erwähnen, dass das Symbol der _Operation_ als _Operator_ bezeichnet wird. Die Objekte, auf denen wir Operationen ausführen, werden _Operanden_ genannt.

## Arithmetik

**Operator** | **Operation**
`+` | Addition
`-` | Subtraktion
`*` | Multiplikation
`/` | Division

Da Raku [Unicode wirklich gut unterstützt](/de/essentials/on-unicode), haben einige dieser Operatoren nicht-ASCII-Äquivalente:

`×` | Multiplikation
`÷` | Division

Um die Reihenfolge der Ausführung zu ändern, verwenden Sie Klammern:

```raku
say 3 * 4 + 5;   # 17
say 3 * (4 + 5); # 27
```

## Modulo

Der Modulo-Operator ist `%` wie in vielen anderen Sprachen.

`%` | Modulo

Er gibt den Rest der ganzzahligen Division zweier Zahlen zurück, also ist `10 % 3` `1`. Beachten Sie, dass `-10 % 3` `2` ist, da das Ergebnis der Operation als die Differenz zwischen der ersten Zahl und der abgerundeten Division multipliziert mit der zweiten Zahl definiert ist. Also ist `$a % $b` äquivalent zu `$a - $b * floor($a / $b)`.

## Teilbarkeit

Raku fügt einen nützlichen Operator hinzu, um zu testen, ob die Zahl durch eine andere Zahl teilbar ist.

`%%` | Teilbarkeit

Dies ist ein Infix-Operator, der zwei Operanden benötigt: `10 %% 3`. Wenn der erste Operand durch den zweiten Operand teilbar ist, ist das Ergebnis ein boolesches `True`. Andernfalls `False`.

## Ganzzahloperationen

Es gibt spezielle Operationen, die ganzzahlige Ergebnisse zurückgeben. Ihre Operatoren sind Wörter anstelle von Symbolen.

`div` | Ganzzahldivision
`mod` | Ganzzahlmodulo

Der `div`-Operator rundet das Ergebnis ab, also ist `10 div 3` `3`, und `-10 div 3` ist `-4`.

Sowohl `div` als auch `mod` erwarten ganzzahlige Operanden. Das folgende Programm funktioniert also nicht, wenn Sie die als `Error` markierten Zeilen auskommentieren:

```raku
say 10.3 % 3;     # OK
# say 10.3 mod 3; # Error

say 10.3 / 3.3;     # OK
# say 10.3 div 3.3; # Error
```

## Potenz

Es gibt zwei Möglichkeiten, das Ergebnis von _x_ hoch _y_ zu erhalten. Erstens können Sie den `**`-Operator verwenden:

```raku
say 3 ** 4; # 81
```

Zweitens können Sie hochgestellte Ziffern verwenden, zum Beispiel:

```raku
say 3⁴; # 81
```

Es ist möglich, mehr als eine hochgestellte Ziffer zu setzen, um den Wert der Potenz größer als 9 zu erhalten. Zum Beispiel:

```raku
say 2¹⁵; # 32768
```

Negative Potenzen sind ebenfalls kein Problem:

```raku
say 2 ** (-2); ## 0.25
say 2⁻²; # 0.25
```

Beachten Sie, dass das Ergebnis der letzten beiden Ausdrücke eine `Rat`-Zahl ist.

## Operationen mit Zuweisung

Alle Operationen unterstützen die Abkürzungssyntax, wenn Sie die Variable aktualisieren müssen. Lassen Sie uns dies am Beispiel von `+` demonstrieren.

Die vollständige Form

```raku
$a = $a + $b;
```

ist äquivalent zu:

```raku
$a += $b;
```

{% include nav.html %}