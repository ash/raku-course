---
title: De topicvariabele
---

{% include menu.html %}

## Probleem

`$_` is de *topic*-variabele. Een `for`-lus stelt deze in op elk item achtereenvolgens, en een methode-aanroep met een punt aan het begin zonder invocant — zoals `.chars` — werkt erop, dus `.chars` betekent `$_.chars`.

Loop over de drie strings `'apple'`, `'fig'` en `'cherry'`. Print voor elk een regel in de vorm `<woord> has <n> letters`, waarbij je de topic `$_` gebruikt voor het woord en een punt-aan-het-begin `.chars`-aanroep voor de lengte. Let op hoe `$_` achtereenvolgens elke string wordt.

## Voorbeeld

Het programma print:

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
