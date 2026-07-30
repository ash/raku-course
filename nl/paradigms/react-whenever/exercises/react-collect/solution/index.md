---
title: 'Oplossing: Sorteer in twee arrays'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @small;
my @big;

react {
    whenever Supply.from-list(4, 42, 7, 100, 15) {
        if $_ > 10 { @big.push($_) }
        else       { @small.push($_) }
    }
}

say @small;
say @big;
```

🦋 Je kunt de broncode vinden in het bestand [react-collect.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-collect.raku).

## Uitvoer

```
[4 7]
[42 100 15]
```

## Opmerkingen

1. De `whenever`-body is gewone code, dus hij kan meer dan verzamelen — hier **beslist** hij en stuurt hij elke waarde bij binnenkomst naar `@big` of `@small`. Binnen elke array houden de waarden hun stroomvolgorde.

1. Het react-blok wacht tot de stroom klaar is, dus zijn beide arrays compleet voordat ze afgedrukt worden.

{% include nav.html %}
