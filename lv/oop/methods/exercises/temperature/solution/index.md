---
title: 'Risinājums: Temperatūras pārrēķins'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Celsius {
    has $.degrees;

    method to-fahrenheit {
        $.degrees * 9 / 5 + 32;
    }
}

say Celsius.new(degrees => 100).to-fahrenheit;
```

🦋 Atrodiet programmu failā [temperature.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/temperature.raku).

## Izvade

```
212
```

## Komentāri

1. Metode strādā ar objekta paša atribūtu `degrees`, tāpēc formulai nav vajadzīgs neviens padots arguments.

1. `100` Celsija grādiem rezultāts ir `212` Fārenheita grādi.

{% include nav.html %}
