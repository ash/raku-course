---
title: 'Solution: Een optionele exponent'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
sub power($base, $exp?) {
    $base ** ($exp // 2)
}

say power(5);
say power(5, 3);
```

🦋 De broncode is te vinden in het bestand [optional-exponent.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/optional-exponent.raku).

## Uitvoer

```
25
125
```

## Opmerkingen

1. Het `?` achter `$exp` maakt de parameter optioneel, zodat `power` kan worden aangeroepen met alleen het grondtal.

1. Wanneer `$exp` wordt weggelaten is hij ongedefinieerd, en `//` levert de terugvalwaarde `2`, zodat `power(5)` het grondtal kwadrateert tot `25`. Wanneer een exponent wordt meegegeven, zoals in `power(5, 3)`, wordt die waarde gebruikt, wat `125` oplevert.

{% include nav.html %}
