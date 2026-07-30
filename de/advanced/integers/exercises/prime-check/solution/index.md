---
title: 'Solution: Primzahl oder nicht'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 97.is-prime;
say 91.is-prime;
```

🦋 Du findest den Quellcode in der Datei [prime-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/prime-check.raku).

## Ausgabe

```
True
False
```

## Kommentare

1. `97` hat keine anderen Teiler als `1` und sich selbst, daher gibt `is-prime` `True` zurück.

1. `91` sieht wie eine Primzahl aus, ist aber `7 × 13`, daher gibt `is-prime` `False` zurück. Die Methode übernimmt die Faktorisierung für dich, und genau dafür ist sie da.

{% include nav.html %}
