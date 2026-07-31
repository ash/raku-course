---
title: 'Risinājums: Pievienojiet metodi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Dog {
    has $.name;
}

Dog.^add_method('speak', method { $.name ~ ' says woof' });

say Dog.new(name => 'Rex').speak;
```

🦋 Atrodiet programmu failā [add-a-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/add-a-method.raku).

## Izvade

```
Rex says woof
```

## Komentāri

1. `.^add_method` izpildes laikā piesaista klases metaobjektam jaunu metodi, kas dota kā anonīma `method { … }`.

1. Pievienotā metode ir īsta klases metode, tāpēc tās iekšienē `$.name` sasniedz objekta atribūtu `name` gluži tāpat, kā to darītu klases ķermenī uzrakstīta metode. Pēc izsaukuma katrs `Dog` atsaucas uz `.speak`.

{% include nav.html %}
