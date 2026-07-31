---
title: Een our-variabele
translations_gpt:
---

{% include menu.html %}

## Opgave

Alleen `our` maakt een naam zichtbaar buiten zijn pakket; `my` houdt het priv&eacute;. Maak een pakket `Config` met een `our`-variabele `$port` ingesteld op `8080` **en** een `my`-variabele `$secret` ingesteld op `42`. Druk van buitenaf `$Config::port` af, en druk vervolgens af of `$Config::secret` gedefinieerd is — dat zou niet het geval moeten zijn, omdat een `my`-variabele geen onderdeel is van de naamruimte.

## Voorbeeld

Het programma drukt af:

```
8080
False
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
