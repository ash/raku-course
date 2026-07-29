---
title: 'Решение: Сопоставьте тип'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
{
    my $x = 1 / 0;
    say $x;

    CATCH {
        when X::Numeric::DivideByZero {
            say 'cannot divide by zero';
        }
    }
}
```

🦋 Исходный код можно найти в файле [match-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/match-the-type.raku).

## Вывод

```
cannot divide by zero
```

## Комментарии

1. В Raku `1 / 0` не взрывается сразу; получается ленивый `Failure`. Исключение бросается лишь
тогда, когда мы *пользуемся* значением — здесь при попытке напечатать его через `say`.

1. Брошенное исключение имеет встроенный тип `X::Numeric::DivideByZero`, и
`when X::Numeric::DivideByZero` сопоставляет его в точности. Сопоставление конкретного типа —
вместо того чтобы ловить всё подряд через `default` — позволяет обрабатывать разные ошибки
по-разному.

{% include nav.html %}
