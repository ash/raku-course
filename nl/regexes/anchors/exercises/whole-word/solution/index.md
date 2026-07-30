---
title: 'Oplossing: Een heel woord'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say 'this is fine' ~~ /<< is >>/;
```

🦋 Je kunt de broncode vinden in het bestand [whole-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-word.raku).

## Uitvoer

```
｢is｣
```

## Opmerkingen

1. De ankers `<<` en `>>` eisen aan beide kanten van `is` een woordgrens.

1. De letters `is` zitten ook binnen `this`, maar daar hebben ze links geen woordgrens, dus slaat de engine dat voorkomen over en matcht ze in plaats daarvan het losstaande woord `is`.

1. Beide kandidaten drukken dezelfde `｢is｣` af, dus hoe weet je welke werkelijk matchte? Verander de `is` die in `this` verstopt zit — maak van de string bijvoorbeeld `'thus is fine'`. De uitvoer is nog steeds `｢is｣`, onveranderd, wat bewijst dat dat voorkomen nooit de match was. Verander nu in plaats daarvan het losstaande woord (zeg `'this it fine'`) en de match verdwijnt (`Nil`). Je kunt de match ook vragen waar hij begint: `('this is fine' ~~ /<< is >>/).from` geeft `5` terug, de positie van het losstaande `is`, niet `2`.

{% include nav.html %}
