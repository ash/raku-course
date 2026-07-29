---
title: 'Решение: Служители и роли'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [dog-and-cat.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/dog-and-cat.raku).

## Изход

```
Anna - manager
Bob - intern
```

## Коментари

1. `Manager` и `Intern` наследяват атрибута `name` и метода `badge` от `Employee`, така че никой от тях не се налага да повтаря този код.

1. Всеки дъщерен клас предефинира `role`. Понеже `badge` извиква `self.role`, той подхваща предефинираната версия, принадлежаща на действителния обект, и дава различен бадж за мениджъра и за стажанта.

1. Името на метода, `role`, е просто име. Но то съвпада с ключовата дума `role`, която ще бъде въведена по-нататък.

{% include nav.html %}
