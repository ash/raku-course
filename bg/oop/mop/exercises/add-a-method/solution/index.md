---
title: 'Решение: Добавете метод'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Dog {
    has $.name;
}

Dog.^add_method('speak', method { $.name ~ ' says woof' });

say Dog.new(name => 'Rex').speak;
```

🦋 Намерете програмата във файла [add-a-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/add-a-method.raku).

## Изход

```
Rex says woof
```

## Коментари

1. `.^add_method` прикачва нов метод към метаобекта на класа по време на изпълнение, зададен като анонимен `method { … }`.

1. Добавеният метод е истински метод на класа, така че вътре в него `$.name` стига до атрибута `name` на обекта, точно както би направил метод, написан в тялото на класа. След извикването всеки `Dog` отговаря на `.speak`.

{% include nav.html %}
