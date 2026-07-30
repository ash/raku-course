---
title: 'Lösung: Die Tribonacci-Folge'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @trib = 1, 1, 1, * + * + * ... *;
say @trib[^8];
```

🦋 Du findest den Quellcode in der Datei [tribonacci.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/tribonacci.raku).

## Ausgabe

```
(1 1 1 3 5 9 17 31)
```

## Kommentare

1. Die Closure `* + * + *` addiert die drei vorigen Elemente, um das nächste zu erzeugen, es braucht also drei Anfangswerte.

1. Die Folge ist träge, sie in `@trib` abzulegen und nach `@trib[^8]` zu fragen berechnet also nur die ersten acht Zahlen.

{% include nav.html %}
