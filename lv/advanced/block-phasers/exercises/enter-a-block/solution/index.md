---
title: 'Risinājums: Ieiet blokā'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
for 1..2 {
    ENTER say '--entering';
    say "body $_";
}
```

🦋 Atrodiet programmu failā [enter-a-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/enter-a-block.raku).

## Izvade

```
--entering
body 1
--entering
body 2
```

## Komentāri

1. `ENTER` izpildās katru reizi, kad blokā ieiet, tieši pirms tā ķermeņa. Tā kā cikls savā ķermenī ieiet pa vienai reizei katrā iterācijā, `--entering` tiek izdrukāts pirms katras `body` rindas.

1. Tieši ar to `ENTER` atšķiras no `FIRST`: `FIRST` izpildītos tikai vienreiz visam ciklam, turpretī `ENTER` izpildās pie katras ieiešanas.

{% include nav.html %}
