---
title: 'Risinājums: Hešu indeksēšana'
translations_gpt:
---

{% include menu.html %}

Šeit ir viens no iespējamiem uzdevuma risinājumiem.

## Kods

```raku
my %h = a => 1;
say %h<a>;
```

🦋 Šīs programmas pirmkodu var atrast failā [subscript-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/subscript-a-hash.raku).

## Izvade

```
1
```

## Komentāri

1. Indeksēšanas operators `< >` ir postcirkumfiksa operators: tas seko aiz terma (heša) un aptver atslēgu.

1. `%h<a>` atgriež vērtību, kas glabāta zem atslēgas `a`, proti, `1`.

{% include nav.html %}
