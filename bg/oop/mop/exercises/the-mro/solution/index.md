---
title: 'Решение: Редът на разрешаване на методите'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [the-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/the-mro.raku).

## Изход

```
(C B A Any Mu)
```

## Коментари

1. `.^mro` връща веригата от типове, която Raku претърсва при разрешаването на метод.

1. Веригата следва линията на наследяване стъпка по стъпка: `C`, после родителят му `B`, после родителят на `B` — `A`, — и накрая `Any` и `Mu`, с които завършва всеки тип. По-дълбока йерархия просто удължава списъка.

{% include nav.html %}
