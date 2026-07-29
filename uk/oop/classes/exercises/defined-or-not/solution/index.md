---
title: 'Розв''язання: Визначений чи ні'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class Cat {
}

class Dog {
}

for Cat, Dog, Cat.new, Dog.new -> $thing {
    say $thing.defined;
}
```

🦋 Вихідний код можна знайти у файлі [defined-or-not.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/defined-or-not.raku).

## Вивід

```
False
False
True
True
```

## Коментарі

1. Цикл проходить сумішшю об'єктів типу (`Cat`, `Dog`) та екземплярів (`Cat.new`, `Dog.new`).

1. Обидва об'єкти типу є невизначеними, тож `defined` повертає для них `False`; обидва екземпляри є визначеними, тож він повертає `True`. Визначеність залежить від того, чи є значення об'єктом типу, чи справжнім екземпляром, — а не від того, до якого класу воно належить.

{% include nav.html %}
