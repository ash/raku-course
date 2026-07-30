---
title: 'Oplossing: Niet gevolgd door'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say so '50 dollars' ~~ / \d+ >> <!before '%'> /;
```

🦋 Je kunt de broncode vinden in het bestand [not-followed.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/not-followed.raku).

## Uitvoer

```
True
```

## Opmerkingen

1. `<!before '%'>` is een negatieve lookahead: hij slaagt alleen wanneer de tekst vlak achter het getal **geen** `%` is.

1. De `>>` is een woordgrens die het **einde** van het getal markeert, en die doet er hier toe. Zonder die grens zou de gulzige `\d+` terugkrabbelen: bij `50% off` zou hij de `0` opgeven en alleen `5` matchen — dat *niet* door `%` gevolgd wordt — zodat het patroon ten onrechte zou slagen. `>>` dwingt `\d+` het hele getal te nemen, zodat de lookahead aan het echte einde getest wordt. Daardoor geeft `50 dollars` `True`, terwijl `50% off` terecht `False` geeft.

{% include nav.html %}
