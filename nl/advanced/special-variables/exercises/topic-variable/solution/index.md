---
title: 'Solution: De topicvariabele'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
for 'apple', 'fig', 'cherry' {
    say "$_ has {.chars} letters";
}
```

🦋 Je kunt de broncode vinden in het bestand [topic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/topic-variable.raku).

## Uitvoer

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Opmerkingen

1. Een `for`-lus stelt de topic-variabele `$_` in op elk item achtereenvolgens, dus het blok draait drie keer, met `$_` gelijk aan `'apple'`, dan `'fig'`, dan `'cherry'`.

1. Binnen de string interpoleert `$_` het huidige woord, en de punt-aan-het-begin `.chars`-aanroep — een afkorting voor `$_.chars` — geeft de lengte. Beide verwijzen naar dezelfde topic, daarom klopt de telling altijd met het woord op de regel.

{% include nav.html %}
