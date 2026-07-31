---
title: Statuss ar klientu
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Iegūstiet tīmekļa lappuses statusu vieglo ceļu — ar **Cro klienta moduli**, nevis ar neapstrādātu ligzdu. Izmantojiet `Cro::HTTP::Client.get`, lai ielādētu `http://example.com/`, sagaidiet atbildi ar `await` un izdrukājiet tās `.status` — nekāda teksta parsēšana nav vajadzīga.

> Šim vingrinājumam vajadzīgs uzstādīts Cro modulis (`zef install cro`) un strādājošs tīkla savienojums.

## Piemērs

Palaista programma izdrukā:

```
200
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
