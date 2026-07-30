---
title: 'Solution: Een schreeuwmodule'
translations_gpt: De oplossing van 'Een roepmodule'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave. Het gebruikt twee bestanden.

## Code

De module, `Shouter.rakumod`:

```raku
unit module Shouter;

sub shout($s) is export {
    $s.uc
}
```

Het programma, `shout.raku`:

```raku
use Shouter;

say shout('hi');
```

🦋 Je kunt beide bronbestanden vinden in de map [exercises/advanced/modules-basics/shout-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/shout-module).

## Uitvoer

```console
$ raku -I. shout.raku
HI
```

## Opmerkingen

1. De `is export`-eigenschap maakt `shout` zichtbaar voor elk programma dat de module gebruikt.

1. De `.uc`-methode geeft de versie in hoofdletters van de string terug.

{% include nav.html %}
