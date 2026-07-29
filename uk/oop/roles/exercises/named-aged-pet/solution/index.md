---
title: 'Розв''язання: Улюбленець з іменем і віком'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
role Named {
    method label {
        'I am ' ~ self.name;
    }
}

role Aged {
    method status {
        self.age ~ ' years';
    }
}

class Pet does Named does Aged {
    has $.name;
    has $.age;
}

my $p = Pet.new(name => 'Rex', age => 3);
say $p.label;
say $p.status;
```

🦋 Вихідний код можна знайти у файлі [named-aged-pet.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/named-aged-pet.raku).

## Вивід

```
I am Rex
3 years
```

## Коментарі

1. `Pet` компонує дві ролі одразу, здобуваючи і метод `label`, і метод `status`.

1. Метод кожної ролі використовує атрибут (`name` або `age`), який надає клас `Pet`.

{% include nav.html %}
