---
title: 'Solution: Opruimen bij verlaten'
translations_gpt: De oplossing van 'Opruimen bij verlaten'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
sub work {
    LEAVE say 'Cleanup';

    say 'Working';
    return;
    say 'never reached';
}

work();
```

🦋 Je kunt de broncode vinden in het bestand [clean-up-on-leave.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/clean-up-on-leave.raku).

## Uitvoer

```
Working
Cleanup
```

## Opmerkingen

1. Nadat `Working` is afgedrukt, verlaat de `return` de subroutine onmiddellijk, dus `never reached` wordt nooit afgedrukt.

1. Hoewel de body vroegtijdig verlaten werd, wordt de `LEAVE`-phaser toch uitgevoerd bij het verlaten, en drukt `Cleanup` af. Deze garantie is precies waarom `LEAVE` de juiste plek is om resources vrij te geven — het wordt uitgevoerd ongeacht hoe het blok eindigt.

{% include nav.html %}
