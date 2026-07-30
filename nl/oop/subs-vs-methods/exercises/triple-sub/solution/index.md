---
title: 'Oplossing: Verdrievoudigen als subroutine'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub triple($x) {
    $x * 3;
}

say triple(7);
```

🦋 Je kunt de broncode vinden in het bestand [triple-sub.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-sub.raku).

## Uitvoer

```
21
```

## Opmerkingen

1. Als subroutine is `triple` een op zichzelf staande bewerking: hij krijgt de waarde waarmee gewerkt moet worden als argument.

1. De bijbehorende oefening lost dezelfde taak op als methode, zodat je de twee aanpakken kunt vergelijken.

{% include nav.html %}
