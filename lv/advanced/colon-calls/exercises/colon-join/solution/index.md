---
title: 'Risinājums: Join ar kolu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say <a b c>.reverse.join: '-';
```

🦋 Atrodiet programmu failā [colon-join.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-join.raku).

## Izvade

```
c-b-a
```

## Komentāri

1. `.reverse` patur savu parasto formu, jo atrodas ķēdes vidū. `join` ir pēdējais, tāpēc tas var izmantot kolu, nododot `'-'` tieši tāpat, kā to darītu `join('-')`.

1. Saraksts, apgriezts uz `c, b, a`, tad tiek savienots ar defisēm, dodot `c-b-a`. Kola forma darbojas ar parastām vērtībām, ne tikai ar blokiem.

{% include nav.html %}
