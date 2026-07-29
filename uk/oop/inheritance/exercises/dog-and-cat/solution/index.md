---
title: 'Розв''язання: Працівники та посади'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

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

🦋 Вихідний код можна знайти у файлі [dog-and-cat.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/dog-and-cat.raku).

## Вивід

```
Anna - manager
Bob - intern
```

## Коментарі

1. `Manager` та `Intern` успадковують атрибут `name` і метод `badge` від `Employee`, тож жодному з них не потрібно повторювати цей код.

1. Кожна дитина перевизначає `role`. Оскільки `badge` викликає `self.role`, він підхоплює перевизначену версію, що належить справжньому об'єктові, даючи різні бейджі для менеджера та стажера.

1. Ім'я методу, `role`, є просто іменем. Але воно збігається з ключовим словом `role`, яке буде введено пізніше.

{% include nav.html %}
