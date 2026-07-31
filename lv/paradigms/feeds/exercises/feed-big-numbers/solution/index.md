---
title: 'Risinājums: Lielo skaitļu plūsma'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
(1..10) ==> grep(* > 5) ==> my @big;
say @big;
```

🦋 Atrodiet programmu failā [feed-big-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-big-numbers.raku).

## Izvade

```
[6 7 8 9 10]
```

## Komentāri

1. Plūsma nosūta `1..10` uz `grep`, kas patur skaitļus, kuri lielāki par `5`.

1. Rezultāts ietek `@big` — mērķī, kas plūsmu noslēdz.

{% include nav.html %}
