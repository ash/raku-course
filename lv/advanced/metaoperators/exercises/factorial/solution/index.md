---
title: 'Risinājums: Visi faktoriāli uzreiz'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

```raku
say [\*] 1..6;
```

🦋 Programmas pirmkodu var atrast failā [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/factorial.raku).

## Izvade

```
(1 2 6 24 120 720)
```

## Komentāri

1. Atpakaļsvītra iekavās pārveido `[*]` par *trīsstūra* redukciju. Tā vietā, lai samazinātu sarakstu līdz vienai vērtībai, tā saglabā katru daļējo reizinājumu: `1`, tad `1*2`, tad `1*2*3` un tā tālāk.

1. Katrs daļējais reizinājums `1*2*...*k` ir tieši _k!_, tāpēc rezultāts ir faktoriālu saraksts no `1` līdz `6`. Parasta `[*] 1..6` būtu devusi tikai pēdējo no tiem, `720`.

{% include nav.html %}
