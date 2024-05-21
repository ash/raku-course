---
title: Achten Sie auf den Abstand
---

{% include menu.html %}

Die Verwendung von Funktionen in Raku ist meist intuitiv und verursacht keine Probleme, aber Sie müssen auf den folgenden Aspekt achten.

## TL;DR

Fügen Sie keinen Abstand zwischen dem Namen der Funktion und den Klammern mit ihren Argumenten hinzu. Verwenden Sie jedoch einen Abstand nach `for` und `if`.

## Lange Geschichte

Nehmen wir eine einfache Funktion:

```raku
sub f($x, $y) {
    return $x + $y;
}
```

Beachten Sie zunächst das Fehlen von Leerzeichen zwischen dem Namen der Funktion und den öffnenden Klammern, die die Parameter enthalten. Einige Codierungsstile in anderen Sprachen erfordern dort möglicherweise ein Leerzeichen. Raku ist damit einverstanden, aber dies ist keine Praxis, der man folgen sollte:

```raku
sub f ($x, $y) {
    return $x + $y;
}
```

Auf der Aufrufseite ist das Fehlen von Leerzeichen wichtig. Wenn Sie die Funktion aufrufen und die Klammern weglassen, ist das Leerzeichen nach dem Namen der Funktion unvermeidlich:

```raku
f 5, 6;
```

Aber wenn Sie Klammern hinzufügen, dürfen Sie kein Leerzeichen davor haben. Dies ist ein korrekter Aufruf:

```raku
f(5, 6);
```

Und dieser Aufruf ist falsch:

```raku
f (5, 6);
```

Solcher Code verursacht eine Ausnahme:

    Zu wenige Positionsparameter übergeben; erwartet wurden 2 Argumente, aber es wurde 1 übergeben
      sub f bei t.raku Zeile 1
      in Block <unit> bei t.raku Zeile 5

Raku sieht den Aufruf mit einem Leerzeichen `f (5, 6)` als Versuch, ein einzelnes Argument `(5, 6)` an die Funktion zu übergeben. Sie können den Typ dieses Arguments leicht überprüfen, wenn Sie die Funktion so umschreiben, dass sie nur ein Argument akzeptiert:

```raku
sub f($param) {
    say $param.WHAT;
}

f (5, 6); # (List)
```

Das Aufrufen von `f (5, 6)` bedeutet also, dass wir eine [Liste](/de/essentials/positionals/lists) an die Funktion übergeben. Die Liste als eine einzelne Entität.

## Wann ein Leerzeichen benötigt wird

In einigen Fällen ist das Leerzeichen erforderlich. Das passiert, wenn Sie Klammern mit einem der Schlüsselwörter wie `if` oder `for` oder `loop` verwenden. Der folgende Code ist falsch:

```raku
if(True != False) {
    say 'OK';
}
```

Die Fehlermeldung erklärt, was falsch ist:

    ===SORRY!===
    Das Wort 'if' wird als Funktionsaufruf 'if()' interpretiert. Bitte verwenden Sie
    Leerzeichen anstelle von Klammern.
    bei /Users/ash/raku-course/t.raku:1
    ------> if⏏(True != False) {
    Unerwarteter Block in Infix-Position (zwei Terme hintereinander)
    bei /Users/ash/raku-course/t.raku:1
    ------> if(True != False)⏏ {

Im Fall von `if` sind Klammern überhaupt nicht erforderlich, sodass das Problem nicht auftreten kann, wenn Sie sie nicht verwenden. Aber in einigen Fällen, wie zum Beispiel bei `loop`, müssen Sie sie haben, und das Leerzeichen wird obligatorisch:

```for
loop(my $c = 0; $c != 10; $c++) { say $c }
```

In diesem Code passiert dasselbe: `loop(...)` wird vom Compiler als Funktionsaufruf verstanden. Fügen Sie ein Leerzeichen hinzu, um das Problem zu lösen. Oder besser, schreiben Sie das Fragment mit `for` um.

## Fazit

Das Fazit: Um solche Probleme zu vermeiden, fügen Sie keinen Abstand zwischen dem Namen der Funktion und den Klammern mit den Argumenten der Funktion hinzu und versuchen Sie, Klammern zu vermeiden, wenn dies mit anderen Sprachkonstruktionen wie Kontrollfluss möglich ist.

{% include nav.html %}