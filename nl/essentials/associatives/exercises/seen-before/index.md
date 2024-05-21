---
title: 'Oefening: Eerder gezien?'
---

{% include menu.html %}

## Probleem

Maak een programma dat een lus start met de volgende acties:

1. Vraag om een woord in te voeren.
2. Als het woord al een keer is gezien, print `Gezien!`.
3. Als het woord meer dan een keer is gezien, print `Gezien 2 keer!`, enz.
3. Herhaal de lus.

## Voorbeeld

Een voorbeeld van interactie met het programma:

```console
$ raku seen-before.raku
Woord: Ik
Woord: nooit
Woord: zag
Woord: een
Woord: zag
Gezien!
Woord: dat
Woord: zag
Gezien 2 keer!
Waar
Woord: als
Woord: dat
Gezien!
Woord: zag
Gezien 3 keer!
Waar
Woord: gezaagd
Woord: ^C
```

Om het programma te stoppen, druk op `Ctrl+C`.

## Oplossing

✅ [Zie de oplossing](solution)

{% include nav.html %}