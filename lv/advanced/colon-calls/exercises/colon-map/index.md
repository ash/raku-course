---
title: Map ar kolu
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Šeit ir izteiksme, kas dubulto skaitļus no `1` līdz `10` un pēc tam patur tikai tos, kas lielāki par `10`:

```raku
(1..10).map(* * 2).grep(* > 10).say;
```

Pārrakstiet to tā, lai metodes `grep` izsaukums iekavu vietā izmantotu kola formu. Pārējo ķēdi atstājiet nemainīgu. Atcerieties, ka kola forma paņem atlikušo instrukcijas daļu, tāpēc kolu drīkst izmantot tikai ķēdes pēdējais izsaukums.

## Piemērs

Programma izdrukā:

```
(12 14 16 18 20)
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
