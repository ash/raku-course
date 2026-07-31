---
title: 'Risinājums: Map ar kolu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say (1..10).map(* * 2).grep: * > 10;
```

🦋 Atrodiet programmu failā [colon-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-map.raku).

## Izvade

```
(12 14 16 18 20)
```

## Komentāri

1. Kola formu var izmantot tikai `grep`, ķēdes pēdējais izsaukums. Kols padara `* > 10` par tā argumentu, tieši tāpat kā to darītu `grep(* > 10)`. Tā kā rezultāti tomēr jāizdrukā, `say` tagad tiek lietots kā funkcija, nevis kā metode.

1. Izsaukumam `map` jāpatur savas iekavas. Ja tā vietā rakstītu `.map: * * 2`, kols aprītu `.grep(* > 10)` kā daļu no `map` argumentiem, un ķēde sabruktu.

{% include nav.html %}
