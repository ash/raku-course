---
title: 'Solution: De waarde van π'
---

{% include menu.html %}

Het programma om de waarde van π af te drukken is eenvoudig genoeg.

## Code

```raku
say π;
```

🦋 Je kunt de volledige code vinden in het bestand [pi.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/pi.raku).

## Uitvoer

Voer het programma uit en zie wat het afdrukt:

```console
$ raku exercises/numbers/pi.raku
3.141592653589793
```

## Opmerkingen

Raku biedt ons een ingebouwde constante genaamd `π`, wat het programma triviaal maakt. Overweeg echter andere opties om hetzelfde te doen:

```raku
    π.say;
```

Of:

```raku
    pi.say;
```

Of:

```raku
    say pi;
```

{% include nav.html %}