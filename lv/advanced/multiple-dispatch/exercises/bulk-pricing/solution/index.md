---
title: 'Risinājums: Vairumtirdzniecības cenas'
translations_gpt:
---

{% include menu.html %}

Šeit ir viens no iespējamiem uzdevuma atrisinājumiem.

## Kods

```raku
multi sub price(Int $qty where $qty >= 10) { say 'bulk price' }
multi sub price(Int $qty)                  { say 'normal price' }

price(3);
price(25);
```

🦋 Šīs programmas pirmkodu var atrast failā [bulk-pricing.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/bulk-pricing.raku).

## Izvade

```
normal price
bulk price
```

## Komentāri

1. Pirmajam kandidātam ir `where` klauzula, kas pieņem tikai daudzumus no 10 un vairāk, tāpēc izsaukums `price(25)` tiek nosūtīts uz to.

1. Otrajam kandidātam nav nosacījuma, un tas darbojas kā universālais variants, tāpēc `price(3)` nonāk tur.

{% include nav.html %}
