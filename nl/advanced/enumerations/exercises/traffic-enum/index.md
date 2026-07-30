---
title: Verkeerslichten
translations_gpt: Dutch
---

{% include menu.html %}

## Opgave

Definieer een enum `Light` met de constanten `red`, `amber` en `green` (in die volgorde). Declareer een variabele getypeerd met de enum, `my Light $current`, en stel deze in op `red`. Print het licht samen met het getal erachter, in de vorm `red is 0`.

**Verander het licht vervolgens een paar keer** — wijs `$current` opnieuw toe aan `amber` en daarna aan `green`, en print het na elke wijziging op dezelfde manier — zodat je `red` → `amber` → `green` doorloopt.

Je zou misschien verwachten dat `$current++` automatisch naar het volgende licht gaat — probeer het eens en kijk wat er gebeurt.

## Voorbeeld

Het programma print:

```
red is 0
amber is 1
green is 2
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
