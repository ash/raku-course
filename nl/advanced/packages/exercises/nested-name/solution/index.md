---
title: 'Solution: Een geneste naam'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
module Outer {
    module Inner {
        our $base = 10;
        our sub doubled { $base * 2 }
    }
}

say $Outer::Inner::base;
say Outer::Inner::doubled();
```

🦋 Je kunt de broncode vinden in het bestand [nested-name.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/nested-name.raku).

## Uitvoer

```
10
20
```

## Opmerkingen

1. Het nesten van de ene naamruimte in de andere bouwt een langer `::`-pad op. Zowel de variabele als de subroutine bevinden zich twee niveaus diep, in `Outer::Inner`.

1. De volledige naam `$Outer::Inner::base` bereikt de variabele, en `Outer::Inner::doubled()` bereikt de subroutine via dezelfde twee niveaus. Een subroutinenaam heeft geen sigil, dus in tegenstelling tot de variabele staat er geen `$` voor.

1. Beide leden zijn gedeclareerd met `our`, wat ze zichtbaar maakt buiten hun module. Een `my`-declaratie zou ze priv&eacute; hebben gehouden binnen `Inner`.

{% include nav.html %}
