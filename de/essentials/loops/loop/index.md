---
title: Schleife
---

{% include menu.html %}

Die `loop`-Anweisung ist ein Konstrukt in Raku, das viel mit traditionellen Schleifen in der Programmiersprache C und ihren Verwandten gemeinsam hat. Sie nimmt drei Anweisungen: den Initialisierer, den Test und die Anweisung zur Modifikation der Schleifenvariablen. Der Schleifenkörper wird wiederholt ausgeführt, solange der Test `True` bleibt.

```raku
loop (my $c = 0; $c < 5; $c++) {
    say "Der aktuelle Wert des Zählers ist $c.";
}
```

Hier ist `++` ein Postfix-Operator, der sein Argument um 1 erhöht. Wir werden im zweiten Teil des Kurses mehr Operatoren behandeln.

Das Programm führt den Schleifenkörper fünfmal aus.

```console
$ raku t.raku
Der aktuelle Wert des Zählers ist 0.
Der aktuelle Wert des Zählers ist 1.
Der aktuelle Wert des Zählers ist 2.
Der aktuelle Wert des Zählers ist 3.
Der aktuelle Wert des Zählers ist 4.
```

Einige oder sogar alle Anweisungen im Kopf der `loop`-Schleife können weggelassen werden. Hier ist zum Beispiel dasselbe Programm:

```raku
my $c = 0;
loop (; $c < 5;) {
    say "Der aktuelle Wert des Zählers ist $c.";
    $c++;
}
```

## * * *

Die `loop`-Schleifen sind wahrscheinlich die am wenigsten genutzten Schleifen in Raku. Sie können beispielsweise in einem automatisierten Übersetzer von C nach Raku gefunden werden. In Raku gibt es jedoch praktischere Schleifen wie `for`, die wir sehr bald untersuchen werden.

{% include nav.html %}