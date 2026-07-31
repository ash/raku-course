---
title: 'Solution: Machtstoren'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
say 2 ** 2 ** 3;
```

🦋 Je kunt de broncode vinden in het bestand [power-tower.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/power-tower.raku).

## Uitvoer

```
256
```

## Opmerkingen

1. Omdat `**` rechts-associatief is, wordt de expressie gegroepeerd als `2 ** (2 ** 3)`.

1. Dat is `2 ** 8`, wat `256` is — niet `(2 ** 2) ** 3`, wat `64` zou zijn.

{% include nav.html %}
