---
title: 'Решение: Два типа исключений'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class TooSmall is Exception {
    method message { 'too small' }
}

class TooBig is Exception {
    method message { 'too big' }
}

for TooSmall, TooBig -> $type {
    {
        $type.new.throw;

        CATCH {
            when TooSmall { say 'small' }
            when TooBig   { say 'big' }
        }
    }
}
```

🦋 Исходный код можно найти в файле [two-exceptions.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/two-exceptions.raku).

## Вывод

```
small
big
```

## Комментарии

1. Цикл бросает `TooSmall` на первом проходе и `TooBig` на втором, каждый внутри собственного
блока со своим `CATCH`.

1. У фазера `CATCH` есть ветвь `when` для каждого типа исключения. На каждом проходе срабатывает
только та ветвь, которая соответствует брошенному типу, — поэтому первый проход печатает `small`,
а второй `big`. Так один набор обработчиков по-разному реагирует на разные виды ошибок.

{% include nav.html %}
