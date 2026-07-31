---
title: 'Risinājums: Mantots atribūts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Vehicle {
    has $.wheels;
}

class Bike is Vehicle {
    has $.wheels = 2;
}

class Car is Vehicle {
    has $.wheels = 4;
}

say Bike.new.wheels;
say Car.new.wheels;
```

🦋 Atrodiet programmu failā [inherited-attribute.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/inherited-attribute.raku).

## Izvade

```
2
4
```

## Komentāri

1. `Bike` un `Car` abi manto no `Vehicle` atribūtu `wheels` (un tā piekļuves metodi). Neviens no tiem atribūtu nedeklarē no jauna — tie mantotajam tikai dod noklusēto vērtību, attiecīgi `2` un `4`.

1. Tā kā noklusējums ir iecepts katrā klasē, objektus var izveidot ar vienkāršu `Bike.new` un `Car.new`, un mantotā piekļuves metode nolasa pareizo riteņu skaitu.

1. Vērtību joprojām var padot arī skaidri, piemēram, `Car.new(wheels => 3)`, un skaidri norādīts arguments pārraksta noklusējumu. Taču, tā kā velosipēdam vai automašīnai visdrīzāk jau ir tam ierastais riteņu skaits, noklusējumi patur biežāko gadījumu vienkāršu, atstājot vietu retajiem izņēmumiem.

{% include nav.html %}
