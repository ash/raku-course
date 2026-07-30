---
title: 'Oplossing: Initiaal en achternaam'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
if 'J Smith' ~~ / $<initial>=(\w) ' ' $<surname>=(\w+) / {
    say ~$<surname>;
}
```

🦋 Je kunt de broncode vinden in het bestand [initial-and-surname.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/initial-and-surname.raku).

## Uitvoer

```
Smith
```

## Opmerkingen

1. `$<initial>=(\w)` captureert één woordteken; `$<surname>=(\w+)` captureert de reeks letters na de spatie.

1. De achternaam wordt daarna op naam teruggelezen als `$<surname>`, en het voorvoegsel `~` drukt hem als kale string af; zonder dat zou `say $<surname>` het matchobject als `｢Smith｣` tonen.

{% include nav.html %}
