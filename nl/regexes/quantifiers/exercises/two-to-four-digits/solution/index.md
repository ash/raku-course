---
title: 'Oplossing: Twee tot vier cijfers'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say 'abc12345' ~~ / \d ** 2..4 /;
```

🦋 Je kunt de broncode vinden in het bestand [two-to-four-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/two-to-four-digits.raku).

## Uitvoer

```
｢1234｣
```

## Opmerkingen

1. `\d ** 2..4` matcht tussen de twee en vier cijfers achter elkaar.

1. De string heeft vijf cijfers beschikbaar, maar het bereik legt de match op vier vast, dus neemt het patroon `1234` en laat het de afsluitende `5` liggen. Gulzig als het is, neemt het het maximum dat het bereik toestaat in plaats van het minimum.

1. Gulzigheid geldt alleen binnen één match — de engine stopt nog steeds op de **eerste** plek waar het patroon slaagt. Zelfs als er later in de string een langere reeks cijfers staat, wordt die nooit bereikt:

    ```raku
    say 'abc123def6789012z' ~~ / \d ** 2..4 /;   # ｢123｣
    ```

    Hier wordt `123` gematcht, hoewel de latere reeks `6789012` het hele bereik met `6789` gevuld zou hebben. De meest linkse match wint.

{% include nav.html %}
