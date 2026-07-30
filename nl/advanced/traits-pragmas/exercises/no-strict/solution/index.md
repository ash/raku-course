---
title: 'Oplossing: strict versoepelen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
no strict;

$a = 10;
$b = 20;
say $a + $b;
```

🦋 Je kunt de broncode vinden in het bestand [no-strict.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/no-strict.raku).

## Uitvoer

```
30
```

## Opmerkingen

1. `no strict` schakelt de eis uit dat variabelen gedeclareerd moeten zijn, zodat aan `$a` en `$b` toegekend mag worden zonder `my`. Onder het standaard `strict` zou elk van die regels een compilatiefout zijn.

1. Eenmaal toegekend gedragen de variabelen zich normaal, dus `$a + $b` is `30`. De versoepeling is lexicaal — ze duurt slechts tot het einde van het bereik waarin `no strict` staat.

1. Dit is een demonstratie, geen aanbevolen werkwijze: `strict` staat met goede reden standaard aan — het vangt typefouten in variabelenamen op tijdens het compileren. Laat het in echte code aan staan en declareer je variabelen met `my`.

{% include nav.html %}
