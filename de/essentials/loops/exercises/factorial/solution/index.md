---
title: 'Solution: Fakultät'
---

{% include menu.html %}

Eine Fakultät von `N` ist ein Produkt von ganzen Zahlen von 1 bis einschließlich `N`. Zum Beispiel, die Fakultät von 4 ist 1 * 2 * 3 * 4 = 24.

## Code

```raku
my $n = 8;

my $f = 1;
$f *= $_ for 2..$n;

say $f;
```

🦋 Finde das Programm in der Datei [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/factorial.raku).

## Ausgabe

Führe das Programm ein paar Mal aus und probiere verschiedene Werte für `$n`.

```console
$ raku exercises/loops/factorial.raku
40320
```

## Kommentare

Dieses Programm verwendet den `*=` Operator, welcher eine Abkürzung für Multiplikation mit Zuweisung ist: `$x *= $y` ist äquivalent zu `$x = $x * $y`.

Du kannst eine ‚vollständige‘ Schleife anstelle der Postfix-Form verwenden:

```raku
my $n = 8;

my $f = 1;
for 2..$n -> $x {
    $f *= $x;
}

say $f;
```

## Mehr zu diesem Thema

Wir werden zu dieser Aufgabe mehrmals zurückkehren. In diesem Teil des Kurses werden wir dieses Problem auch rekursiv lösen.

Im zweiten Teil des Kurses werden wir über die sogenannten Reduktionsoperatoren lernen, die die Lösung trivial machen. Außerdem wird es eine Möglichkeit geben, einen benutzerdefinierten Operator `!` zu definieren, sodass du `$n!` schreiben kannst, um eine Fakultät zu berechnen. Schließlich wird es eine weitere Gelegenheit geben, eine interessante Lösung zu sehen, wenn wir über die `where` Klausel sprechen.

{% include nav.html %}