---
title: Benannte Parameter
---

{% include menu.html %}

Im Gegensatz zu [positionsbasierten Parametern](../positional-parameters) werden _benannte_ Parameter durch ihre Namen referenziert.

Die folgende Funktion nimmt zwei Parameter namens `$from` und `$to` entgegen.

```raku
sub distance(:$from, :$to) { $from - $to }
```

Um die Funktion aufzurufen, müssen Sie die Argumente benennen:

```raku
say distance(from => 30, to => 10); # 20
```

Es ist ein Fehler, die Argumente so zu übergeben, als wären sie positionsbasiert. Zum Beispiel erzeugt ein Aufruf `distance(30, 10)` einen Fehler:

    Zu viele positionsbasierte Argumente übergeben; erwartete 0 Argumente, aber 2 erhalten
        in sub distance bei t.raku Zeile 1
        in Block <unit> bei t.raku Zeile 2

Der Vorteil ist, dass benannte Argumente in beliebiger Reihenfolge aufgelistet werden können. Die folgenden beiden Aufrufe sind völlig gleichwertig:

```raku
say distance(from => 30, to => 10); # 20

say distance(to => 10, from => 30); # 20
```

## Variablen übergeben

Wenn der Wert, den Sie an eine Funktion übergeben möchten, in einer Variablen gespeichert ist, deren Name mit dem Namen des Parameters übereinstimmt, können Sie eine spezielle Syntax verwenden, die das Tippen reduziert:

```raku
my $from = 30;
my $to = 10;
say distance(:$from, :$to); # 20
```

Dies ist ähnlich wie ein ausführlicher Aufruf:

```raku
say distance(from => $from, to => $to); # 20
```

Auch hier ist die Reihenfolge nicht streng:

```raku
say distance(:$to, :$from); # 20
```

Wenn der Name der Variablen vom Namen des Parameters abweicht, verwenden Sie eine der Möglichkeiten, ein Paar zu übergeben:

```raku
my $a = 20;
my $b = 10;

say distance(from => $a, to => $b);

# oder:

say distance(:from($a), :to($b));
```

{% include nav.html %}