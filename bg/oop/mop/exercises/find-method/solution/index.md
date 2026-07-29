---
title: 'Решение: Намерете метод'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Animal {
    method speak { 'generic' }
}

class Dog is Animal {
}

say so Dog.^find_method('speak');
```

🦋 Намерете програмата във файла [find-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/find-method.raku).

## Изход

```
True
```

## Коментари

1. `.^find_method` връща метода, ако съществува, или недефинирана стойност, ако не. `so` превръща това в обикновена булева стойност.

1. `Dog` не дефинира собствени методи, а резултатът все пак е `True`: `find_method` претърсва цялата верига на наследяване и намира `speak` горе в `Animal`. Това отразява как действително извикване на метод върху `Dog` би открило наследения метод.

{% include nav.html %}
