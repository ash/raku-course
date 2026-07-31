---
title: 'Solution: Som met de `&`-sigil'
translations_gpt: De oplossing van 'Som met de `&`-sigil'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my &add = -> $a, $b {
    $a + $b;
};

say add(2, 3);
```

🦋 Je kunt de broncode vinden in het bestand [sum-with-sigil.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/sum-with-sigil.raku).

## Uitvoer

```
5
```

## Opmerkingen

1. Het pointy block heeft twee parameters, `-> $a, $b`, dus de anonieme subroutine accepteert twee argumenten.

1. Omdat de variabele met de `&`-sigil is gedeclareerd, kan hij worden aangeroepen als `add(2, 3)`, precies zoals een benoemde subroutine — zonder sigil op de aanroepplaats — wat `5` oplevert.

{% include nav.html %}
