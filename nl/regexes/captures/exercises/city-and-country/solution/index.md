---
title: 'Oplossing: Stad en land'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
if 'London-UK' ~~ / $<city>=(\w+) '-' $<country>=(\w+) / {
    say ~$<city>;
    say ~$<country>;
}
```

🦋 Je kunt de broncode vinden in het bestand [city-and-country.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/city-and-country.raku).

## Uitvoer

```
London
UK
```

## Opmerkingen

1. `$<city>=( … )` en `$<country>=( … )` geven de twee captures namen in plaats van nummers.

1. Na de match worden ze als `$<city>` en `$<country>` teruggelezen, wat duidelijker leest dan `$0` en `$1` zouden doen.

1. Het voorvoegsel `~` zet elke capture in stringcontext zodat hij als kale tekst afgedrukt wordt; zonder dat zou `say $<city>` het matchobject als `｢London｣` tonen.

{% include nav.html %}
