---
title: 'Розв''язання: Назвіть тип'
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

my $felix = Cat.new;

say $felix.WHAT;
say $felix.WHAT === Cat.WHAT;
say $felix.WHAT === Dog.WHAT;
```

🦋 Вихідний код можна знайти у файлі [name-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/name-the-type.raku).

## Вивід

```
(Cat)
True
False
```

## Коментарі

1. `WHAT` повертає об'єкт типу, показаний у дужках як `(Cat)`: `$felix` є `Cat`.

1. `===` порівнює два об'єкти типу на тотожність. `$felix.WHAT === Cat.WHAT` дає `True`, бо Фелікс справді є `Cat`, тоді як `$felix.WHAT === Dog.WHAT` дає `False` — `Cat` і `Dog` є різними типами, тож їхні об'єкти типу не є тим самим.

{% include nav.html %}
