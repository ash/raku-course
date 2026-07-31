---
title: 'Risinājums: Saistīt skalāru'
translations_gpt:
---

{% include menu.html %}

Šeit ir viens no iespējamiem uzdevuma risinājumiem.

## Kods

```raku
my $source = 1;
my $bound := $source;
my $copy = $source;

$source = 9;
say $bound;
say $copy;
```

🦋 Šīs programmas pirmkodu var atrast failā [bind-a-scalar.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/bind-a-scalar.raku).

## Izvade

```
9
1
```

## Komentāri

1. Saistīšana ar `:=` padara `$bound` par citu nosaukumu tam pašam konteineram, kas ir `$source`, nevis par kopiju. Tāpēc mainot `$source`, izmaiņa ir redzama caur `$bound`, kas izdrukā `9`.

1. Parastā piešķiršana ar `=` kopē vērtību atsevišķā konteinerā, tāpēc `$copy` nav ietekmēts no vēlākajām izmaiņām un joprojām izdrukā `1`.

1. Redzēt abus blakus ir visa būtība: `:=` kopīgo konteineru, `=` dublicē vērtību.

{% include nav.html %}
