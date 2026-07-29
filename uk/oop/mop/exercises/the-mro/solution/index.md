---
title: 'Розв''язання: Порядок розв''язання методів'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class A {
}

class B is A {
}

class C is B {
}

say C.^mro.map(*.^name);
```

🦋 Вихідний код можна знайти у файлі [the-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/the-mro.raku).

## Вивід

```
(C B A Any Mu)
```

## Коментарі

1. `.^mro` повертає ланцюжок типів, у якому Raku шукає, розв'язуючи метод.

1. Ланцюжок іде лінією успадкування крок за кроком: `C`, потім його батько `B`, потім батько `B` — `A`, і нарешті `Any` та `Mu`, якими закінчується кожен тип. Глибша ієрархія просто робить список довшим.

{% include nav.html %}
