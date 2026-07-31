---
title: 'Risinājums: Masīva aizstājvārds'
translations_gpt:
---

{% include menu.html %}

Šeit ir viens no iespējamiem uzdevuma risinājumiem.

## Kods

```raku
my @original = 10, 20, 30;
my @alias := @original;

@original.push(40);
say @alias;
```

🦋 Šīs programmas pirmkodu var atrast failā [alias-an-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/alias-an-array.raku).

## Izvade

```
[10 20 30 40]
```

## Komentāri

1. Saistīšana `@alias := @original` padara `@alias` par citu nosaukumu tam pašam masīva konteineram, nevis par tā kopiju.

1. Izmaiņa tiek veikta caur `@original`, un tā ir strukturāla — `push` pievieno elementu. Tā kā abi nosaukumi ir viens un tas pats konteineris, `@alias` redz jauno elementu. Abi nosaukumi ir pilnībā savstarpēji aizstājami: nav nozīmes, kuru no tiem izmantojat lasīšanai vai masīva modificēšanai.

{% include nav.html %}
