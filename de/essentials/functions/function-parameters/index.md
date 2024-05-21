---
title: Funktionsparameter
---

{% include menu.html %}

Es ist an der Zeit, einige Daten an eine Funktion zu übergeben. Sie kann Parameter aufnehmen, die in Klammern unmittelbar nach dem Namen der Funktion aufgelistet sind.

```raku
sub greet($name) {
    say "Hallo, $name!";
}
```

Du kannst nun die Funktion verwenden und ihr verschiedene Argumente übergeben:

```raku
greet('Alla');
greet('Karl');
```

Die beiden Aufrufe derselben Funktion werden nun unterschiedliche Ergebnisse liefern:

```console
$ raku t.raku
Hallo, Alla!
Hallo, Karl!
```

%%tipblock

## Parameter oder Argument

Diese Begriffe werden oft austauschbar verwendet. Sie beziehen sich beide auf „dasselbe“, betrachten es jedoch aus unterschiedlichen Perspektiven.

* Ein Parameter ist das, was die Funktion erwartet.
* Ein Argument ist das, was du ihr übergibst.

Im obigen Beispiel ist `$name` der Parameter der Funktion, während `'Alla'` und `'Karl'` ihre Argumente sind.

%%/tipblock

## Mehrere Parameter

Eine Funktion kann mehr als einen einzelnen Parameter aufnehmen. In diesem Fall liste alle Parameter durch Kommas getrennt auf:

```raku
sub add($x, $y) {
    say $x + $y;
}

add(10, 20); # 30
```

## Keine Parameter

Es ist ein gültiger Fall, wenn die Funktion überhaupt keine Parameter aufnimmt. In diesem Fall kannst du entweder ein leeres Paar Klammern hinzufügen oder sie ganz weglassen, wie wir es am [Anfang dieses Abschnitts](../) getan haben.

```raku
sub greet() {
    say 'Hallo, Welt!';
}

greet();
```

## Signatur

Die Liste der Parameter einer Funktion wird als _Signatur_ bezeichnet.

{% include nav.html %}