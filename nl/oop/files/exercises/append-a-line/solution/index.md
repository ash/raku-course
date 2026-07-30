---
title: 'Oplossing: Bouw een logbestand op'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
spurt 'log.txt', "start\n";

for 1..3 -> $i {
    spurt 'log.txt', "entry $i\n", :append;
}

print slurp 'log.txt';
```

🦋 Je kunt de broncode vinden in het bestand [append-a-line.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/append-a-line.raku).

## Uitvoer

```
start
entry 1
entry 2
entry 3
```

## Opmerkingen

1. De eerste `spurt` maakt het bestand vers aan met de regel `start`.

1. Elke `spurt` in de lus gebruikt `:append`, dus zet zijn regel achter de bestaande inhoud in plaats van het bestand te vervangen. Precies zo groeit een logbestand: elke iteratie (of elke draaibeurt van een programma) plakt er nog een regel achter.

1. Zonder `:append` zou elke ronde het bestand overschrijven en zou alleen de laatste regel overleven.

{% include nav.html %}
