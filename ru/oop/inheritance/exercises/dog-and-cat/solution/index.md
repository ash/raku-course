---
title: 'Решение: Сотрудники и роли'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Employee {
    has $.name;
    method role {
        'staff';
    }
    method badge {
        "$.name - " ~ self.role;
    }
}

class Manager is Employee {
    method role { 'manager' }
}

class Intern is Employee {
    method role { 'intern' }
}

say Manager.new(name => 'Anna').badge;
say Intern.new(name => 'Bob').badge;
```

🦋 Исходный код можно найти в файле [dog-and-cat.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/dog-and-cat.raku).

## Вывод

```
Anna - manager
Bob - intern
```

## Комментарии

1. `Manager` и `Intern` наследуют от `Employee` атрибут `name` и метод `badge`, поэтому ни одному
из них не нужно повторять этот код.

1. Каждый потомок переопределяет `role`. Поскольку `badge` вызывает `self.role`, он подхватывает
переопределённую версию, принадлежащую конкретному объекту, и бейджи менеджера и стажёра
получаются разными.

1. Имя метода `role` — всего лишь имя. Но оно совпадает с ключевым словом `role`, которое будет
введено позже.

{% include nav.html %}
