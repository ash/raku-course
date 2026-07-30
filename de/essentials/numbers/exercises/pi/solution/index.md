---
title: 'Solution: Der Wert von π'
---

{% include menu.html %}

Das Programm, um den Wert von π auszugeben, ist einfach genug.

## Code

```raku
say π;
```

🦋 Du kannst den vollständigen Code in der Datei [pi.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/pi.raku) finden.

## Ausgabe

Führe das Programm aus und sieh, was es ausgibt:

```console
$ raku exercises/numbers/pi.raku
3.141592653589793
```

## Kommentare

Raku bietet uns eine eingebaute Konstante namens `π`, die das Programm trivial macht. Betrachte dennoch andere Möglichkeiten, dasselbe zu tun:

```raku
    π.say;
```

Oder:

```raku
    pi.say;
```

Oder:

```raku
    say pi;
```

{% include nav.html %}