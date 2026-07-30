---
title: 'Solution: Doppelte Verneinung'
---

{% include menu.html %}

Lassen Sie uns das Programm erweitern, um den zweiten Teil der Übung zu lösen und dieselbe Variable wiederzuverwenden:

## Code

```raku
my $value = False;
say !!$value;

$value = True;
say !!$value;
```

🦋 Den vollständigen Code finden Sie in der Datei [double-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/double-negation.raku).

## Kommentare

Bevor wir das Programm ausführen, überlegen wir, was es ausgeben wird. Es gibt zwei Verneinungsoperatoren vor der Variablen. Sie wirken als zwei Verneinungsoperatoren. Im ersten Fall wird der Wert von `False` auf `True` umgeschaltet und dann sofort wieder von `True` auf `False` zurückgeschaltet. Im zweiten Fall ist der Algorithmus derselbe: Nach zwei Verneinungen erhalten wir den ursprünglichen Booleschen Wert.

## Ausgabe

Das Programm gibt die folgende Ausgabe aus, die die obigen Überlegungen bestätigt:

```console
$ raku exercises/booleans/double-negation.raku
False
True
```

{% include nav.html %}