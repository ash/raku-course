---
title: 'Risinājums: Skaitīt uz augšu'
translations_gpt:
---

{% include menu.html %}

Šeit ir viens no iespējamiem uzdevuma risinājumiem.

## Kods

```raku
my $n = 9;

say $n++;
say $n;
```

🦋 Šīs programmas pirmkodu var atrast failā [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/count-up.raku).

## Izvade

```
9
10
```

## Komentāri

1. `++` ir postfiksa operators: tas atrodas aiz sava operanda. Lietots kā izteiksme, `$n++` vispirms atgriež *veco* vērtību `9` — ko arī `say` izdrukā — un tikai pēc tam palielina mainīgo.

1. Otrā rindiņa parāda, ka `$n` patiešām ir kļuvis par `10`. (Prefiksa forma `++$n` vispirms palielinātu vērtību un atgrieztu `10`.)

{% include nav.html %}
