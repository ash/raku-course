---
title: 'Risinājums: Saplacināt daļas'
translations_gpt:
---

{% include menu.html %}

Šeit ir viens no iespējamiem uzdevuma risinājumiem.

## Kods

```raku
my @first = 1, 2;
my @second = 3, 4, 5;

my @all = flat(@first, @second);
say @all;
say @all.elems;
```

🦋 Šīs programmas pirmkodu var atrast failā [flatten-the-parts.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/flatten-the-parts.raku).

## Izvade

```
[1 2 3 4 5]
5
```

## Komentāri

1. Rakstot `my @all = @first, @second`, jūs _neiegūtu_ plakanu masīvu — tas izveidotu ligzdotu masīvu ar diviem masīviem, `[[1 2] [3 4 5]]`.

1. Rutīna `flat` apvieno abu masīvu elementus vienā plakanā secībā, kas pēc tam tiek saglabāta masīvā `@all`. Rezultātam ir pieci elementi.

{% include nav.html %}
