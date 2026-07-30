---
title: 'Solution: Twee argumenten optellen'
translations_gpt: true
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

🦋 Je kunt de broncode vinden in het bestand [two-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/two-arguments.raku).

## Uitvoer

```console
$ raku two-arguments.raku 2 3
5
```

## Opmerkingen

1. De twee positionele parameters ontvangen de twee woorden van de commandoregel.

1. Commandoregelargumenten komen binnen als strings, maar de `+`-operator converteert ze naar getallen, zodat `2` en `3` optellen tot `5`.

{% include nav.html %}
