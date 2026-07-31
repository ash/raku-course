---
title: 'Risinājums: Atrodiet metodi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Animal {
    method speak { 'generic' }
}

class Dog is Animal {
}

say so Dog.^find_method('speak');
```

🦋 Atrodiet programmu failā [find-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/find-method.raku).

## Izvade

```
True
```

## Komentāri

1. `.^find_method` atgriež metodi, ja tā eksistē, vai nedefinētu vērtību, ja ne. `so` to pārvērš par vienkāršu Būla vērtību.

1. `Dog` pati nedefinē nevienu metodi, un tomēr rezultāts ir `True`: `find_method` pārmeklē visu mantošanas ķēdi un atrod `speak` augšā `Animal`. Tas atspoguļo to, kā īsts metodes izsaukums uz `Dog` atrastu mantoto metodi.

{% include nav.html %}
