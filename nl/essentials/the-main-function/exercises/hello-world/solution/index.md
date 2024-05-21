---
title: 'Oplossing: Hallo Wereld!'
---

{% include menu.html %}

Na een lange weg door de cursus moesten we weer terugkeren naar dit programma, aangezien we net de nieuwe manier van het schrijven van Raku-programma's hebben geleerd.

## Code 1

```raku
sub MAIN() {
    say 'Hallo, Wereld!';
}
```

🦋 Vind het programma in het bestand [hello-world.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/hello-world.raku).

## Code 2

```raku
unit sub MAIN;
say 'Hallo, Wereld!';
```

🦋 Vind het programma in het bestand [hello-world-unit.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/hello-world-unit.raku).

## Voorbeeld

Voer een van de programma's uit:

```console
$ raku exercises/the-main-function/hello-world.raku
Hallo, Wereld!

$ raku exercises/the-main-function/hello-world-unit.raku
Hallo, Wereld!
```

{% include nav.html %}