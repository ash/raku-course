---
title: 'Решение: Назовите ошибку'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub risky {
    die 'sub failed';
}

{
    risky();

    CATCH {
        default {
            say .^name;
            say .message;
        }
    }
}
```

🦋 Исходный код можно найти в файле [name-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/name-the-error.raku).

## Вывод

```
X::AdHoc
sub failed
```

## Комментарии

1. `die` происходит внутри `risky`, но исключение поднимается к вызывающей стороне. Его
обрабатывает `CATCH` в том блоке, который вызвал `risky`, — так обработка ошибок обычно
и устроена: сбой и его обработчик не обязаны находиться в одной и той же процедуре.

1. Обычный `die` со строкой создаёт исключение `X::AdHoc`, о чём и сообщает `.^name`,
а `.message` возвращает текст, переданный в `die`.

{% include nav.html %}
