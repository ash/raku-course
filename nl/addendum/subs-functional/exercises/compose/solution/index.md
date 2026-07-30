---
title: 'Oplossing: Stel twee functies samen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub compose(&f, &g) {
    return -> $x { f(g($x)) };
}

my $combined = compose(* * 2, * + 1);

say $combined(5);
```

🦋 Je kunt de broncode vinden in het bestand [compose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/compose.raku).

## Uitvoer

```
12
```

## Opmerkingen

1. De parameters `&f` en `&g` accepteren elke aanroepbare waarde — hier de Whatever-functies
`* * 2` en `* + 1`.

1. `compose` geeft een verse anonieme functie `-> $x { f(g($x)) }` terug. Haar op
`5` aanroepen draait eerst `g` (`5 + 1`), dan `f` (`6 * 2`), wat `12` geeft.

{% include nav.html %}
