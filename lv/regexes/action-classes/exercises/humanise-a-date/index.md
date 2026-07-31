---
title: Padariet datumu cilvēkam saprotamu
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Uzrakstiet gramatiku, kas parsē ISO datumu, piemēram, `'2026-07-05'`, trīs marķieros: `year`, `month` un `day`. Uzrakstiet **darbību klasi**, kurā katra marķiera metode ar `make` izveido vērtību: `year` un `day` izveido savu skaitli kā veselu skaitli, bet `month` izveido **angļu mēneša nosaukumu** (`1` → `January`, …, `12` → `December`). Metode `TOP` tad nolasa šīs trīs vērtības ar `.made` un izveido cilvēkam lasāmu virkni, piemēram, `'5 July 2026'`. Parsējiet `'2026-07-05'` ar darbību klasi un izdrukājiet `.made`.

## Piemērs

Programma izdrukā:

```
5 July 2026
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
