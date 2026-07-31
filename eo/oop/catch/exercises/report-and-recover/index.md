---
title: Raportu kaj resaniĝu
translations_gpt:
---

{% include menu.html %}

## Problemo

Montru, kiel `CATCH` permesas al programo resaniĝi kaj daŭrigi kun prudenta defaŭlto.

Deklaru variablon `$timeout` starigitan al defaŭlto de `30` antaŭ bloko. Ene de la bloko, faru `die 'config missing'` kaj poste (en linio, kiu neniam estos atingita) provu starigi `$timeout` al `60`. Uzu fazeron `CATCH`, kies bloko `default` presas `warning: <message>; keeping default`. Post la bloko, presu `timeout is <timeout> seconds`.

## Ekzemplo

La programo presas:

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
