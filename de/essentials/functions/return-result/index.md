---
title: Rückgabe des Ergebnisses
---

{% include menu.html %}

Funktionen führen oft nicht nur etwas aus, sondern geben auch ein Ergebnis zurück. Zum Beispiel sollten in der funktionalen Programmierung Funktionen keine Nebeneffekte wie das Drucken auf die Konsole erzeugen. Nichtsdestotrotz hindert dich Raku nicht daran, dies zu tun. Schauen wir uns an, wie man einen Wert aus einer Funktion zurückgibt und wie man ihn im aufrufenden Code erhält.

```raku
sub add($x, $y) {
    return $x + $y;
}

my $sum = add(10, 20);
say $sum; # 30
```

Hier nimmt die Funktion namens `add` zwei Zahlen und gibt deren Summe zurück. Es wird ein explizites `return` verwendet. Auf der aufrufenden Seite kann der Wert, den die Funktion zurückgibt, wie jeder andere Wert verwendet werden. Im obigen Programm wird er einer Variablen zugewiesen.

## Der zuletzt ausgewertete Wert

In Raku ist ein explizites `return` nicht erforderlich, wenn das Ergebnis, das du aus einer Funktion zurückgeben möchtest, der zuletzt berechnete Wert in ihrem Körper ist. Unsere `add`-Funktion kann vereinfacht werden:

```raku
sub add($x, $y) {
    $x + $y
}
```

Wie du vielleicht bemerkt hast, gibt es am Ende der Zeile kein Semikolon, da es nicht erforderlich ist, wenn die Zeile den aktuellen Codeblock beendet.

Solche trivialen und kleinen Funktionen werden oft in einer einzigen Zeile formatiert, um einen kompakteren Code zu erhalten:

```raku
sub add($x, $y) { $x + $y }
```

## Keine Rückgabedaten

Wenn du vor dem Ende des Funktionskörpers aus einer Funktion zurückkehren musst und die Funktion kein Ergebnis zurückgibt, verwende ein nacktes `return`.

```raku
sub test($x) {
    return if $x <= 10;
    say "$x is above the limit";
}
```

{% include nav.html %}