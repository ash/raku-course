---
title: 'Risinājums: Procentu operators'
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

```raku
sub infix:<percent-of>($p, $whole) {
    $whole * $p / 100
}

say 20 percent-of 150;
```

🦋 Programmas pirmkodu var atrast failā [percent-of-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/percent-of-operator.raku).

## Izvade

```
30
```

## Komentāri

1. Operators pieņem procentu `$p` kā kreiso operandu un kopējo summu `$whole` kā labo operandu.

1. Reizinot `$whole` ar `$p` un dalot ar `100`, iegūst pieprasīto daļu: `150 * 20 / 100` ir `30`.

{% include nav.html %}
