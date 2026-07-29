---
title: 'Розв''язання: Формула на класі'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class Geometry {
    method circle-area($r) {
        (π * $r * $r).round
    }
}

say Geometry.circle-area(10);
```

🦋 Вихідний код можна знайти у файлі [speed-limit.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/speed-limit.raku).

## Вивід

```
314
```

## Коментарі

1. Метод не торкається жодного атрибута — він працює лише зі своїм параметром `$r`, — тож його можна викликати для самого класу, не створюючи спершу об'єкта.

1. `Geometry.circle-area(10)` викликає метод для об'єкта типу, передаючи `10`. Результатом є `π * 10 * 10`, а після заокруглення — `314`.

{% include nav.html %}
