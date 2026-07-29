---
title: 'Розв''язання: Додайте метод'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class Dog {
    has $.name;
}

Dog.^add_method('speak', method { $.name ~ ' says woof' });

say Dog.new(name => 'Rex').speak;
```

🦋 Вихідний код можна знайти у файлі [add-a-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/add-a-method.raku).

## Вивід

```
Rex says woof
```

## Коментарі

1. `.^add_method` приєднує новий метод до метаоб'єкта класу під час виконання, задаючи його як анонімний `method { … }`.

1. Доданий метод є справжнім методом класу, тож усередині нього `$.name` дістає атрибут `name` об'єкта — точнісінько як метод, написаний у тілі класу. Після цього виклику кожен `Dog` відгукується на `.speak`.

{% include nav.html %}
