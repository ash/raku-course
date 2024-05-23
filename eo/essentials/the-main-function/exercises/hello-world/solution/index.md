---
title: 'Solvo: Saluton, Mondo!'
---

{% include menu.html %}

Post longa vojo tra la kurso, ni devis reveni al ĉi tiu programo denove, ĉar ni ĵus lernis la novan manieron skribi Raku-programojn.

## Kodo 1

```raku
sub MAIN() {
    say 'Saluton, Mondo!';
}
```

🦋 Trovu la programon en la dosiero [hello-world.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/hello-world.raku).

## Kodo 2

```raku
unit sub MAIN;
say 'Saluton, Mondo!';
```

🦋 Trovu la programon en la dosiero [hello-world-unit.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/hello-world-unit.raku).

## Ekzemplo

Rulu ajnan programon:

```console
$ raku exercises/the-main-function/hello-world.raku
Saluton, Mondo!

$ raku exercises/the-main-function/hello-world-unit.raku
Saluton, Mondo!
```

{% include nav.html %}