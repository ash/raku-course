---
title: 'Решение: Коробка с размером'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
role Sized {
    method describe {
        'size is ' ~ self.size;
    }
}

class Box does Sized {
    has $.size;
}

my $b = Box.new(size => 10);
say $b.describe;
say $b ~~ Sized;
```

🦋 Исходный код можно найти в файле [greetable.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/greetable.raku).

## Вывод

```
size is 10
True
```

## Комментарии

1. Роль предоставляет метод `describe`, а класс включает её через `does Sized`. Метод опирается
на `self.size`, который даёт класс `Box`, — роль и класс складываются в законченный объект.

1. Поскольку `Box` выполняет роль, умное сопоставление `$b ~~ Sized` даёт `True`: объект
распознаётся как обладающий каждой ролью, которую включает его класс. Это удобно, чтобы
проверить, что объект умеет, прежде чем вызывать метод роли.

{% include nav.html %}
