---
title: De dynamische overschrijven
---

{% include menu.html %}

## Probleem

Laat zien hoe een dynamische variabele door een tussenliggende routine stroomt die er niets van afweet.

Schrijf een subroutine `log-it($msg)` die het bericht print met een dynamische variabele `$*prefix` ervoor. Schrijf een tweede subroutine `task` die simpelweg `log-it('working')` aanroept — en zelf nooit `$*prefix` noemt. Roep vervolgens `task` twee keer aan, telkens vanuit een blok dat `$*prefix` op een andere waarde zet (`INFO`, dan `DEBUG`).

## Voorbeeld

Het programma print:

```
INFO: working
DEBUG: working
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
