---
title: 'Solution: Slurpy benoemde argumenten'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
sub describe($name, *%opts) {
    my $details = %opts.sort.map({ "{.key}={.value}" }).join(', ');
    "$name: $details";
}

say describe('Anna', colour => 'red', size => 5);
```

🦋 De broncode is te vinden in het bestand [slurpy-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/slurpy-hash.raku).

## Uitvoer

```
Anna: colour=red, size=5
```

## Opmerkingen

1. De vaste positionele parameter `$name` wordt eerst ingevuld, en de slurpy `*%opts` verzamelt vervolgens alle overige benoemde argumenten in een hash.

1. `%opts.sort` sorteert de paren op sleutel, zodat de uitvoer deterministisch is -- `colour` komt voor `size`. De `.map` zet elk paar om in een `sleutel=waarde`-string met `.key` en `.value`, en `.join(', ')` voegt ze samen.

1. De uiteindelijke string interpoleert `$name` en het samengestelde `$details`, wat `Anna: colour=red, size=5` oplevert.

{% include nav.html %}
