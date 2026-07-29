---
title: Атрибути для читання й запису
translations_gpt:
---

{% include menu.html %}

За замовчуванням аксесор, створений через `has $.name`, доступний _лише для читання_. Значення ініціалізується в конструкторі, після чого його можна читати, але не змінювати ззовні об'єкта. Присвоєння йому є помилкою:

```raku
class Dog {
    has $.name;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
```

Це зупиняється з повідомленням:

```
Cannot modify an immutable Str (Rex)
```

Щоб дозволити змінювати значення через аксесор, позначте атрибут трейтом `is rw`:

```raku
class Dog {
    has $.name is rw;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
say $rex.name; # Max
```

Тепер аксесор повертає записуваний контейнер, тож присвоєння працює, і `name` об'єкта стає `Max`.

{% include nav.html %}
