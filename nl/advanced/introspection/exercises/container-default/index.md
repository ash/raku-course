---
title: De standaardwaarde van de container
---

{% include menu.html %}

## Probleem

Een container kan een standaardwaarde bevatten, ingesteld met de `is default`-trait. Totdat je iets toewijst, geeft het lezen van de variabele die standaardwaarde terug, en `.VAR.default` rapporteert deze.

Declareer een scalar `$count` met een standaardwaarde van `0`. Zonder er iets aan toe te wijzen, druk de variabele zelf af en druk vervolgens de standaardwaarde van zijn container af. Beide regels moeten `0` tonen.

## Voorbeeld

Het programma drukt af:

```
0
0
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
