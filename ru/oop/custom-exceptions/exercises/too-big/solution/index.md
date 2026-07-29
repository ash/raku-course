---
title: 'Решение: Слишком большое'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class TooBig is Exception {
    has $.value;
    has $.limit;

    method message {
        "Value $.value exceeds the limit of $.limit";
    }
}

my $limit = 50;

for 30, 99, 60 -> $value {
    TooBig.new(value => $value, limit => $limit).throw if $value > $limit;
    say "Value $value is within the limit";

    CATCH {
        when TooBig {
            say .message;
            say "Try a value up to {.limit}.";
        }
    }
}
```

🦋 Исходный код можно найти в файле [too-big.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/too-big.raku).

## Вывод

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Комментарии

1. `TooBig is Exception` делает класс бросаемым исключением. Он несёт две порции данных, `value`
и `limit`, а его метод `message` вплетает обе в итоговый текст.

1. `.throw` возбуждает исключение, а `when TooBig` сопоставляет его по типу. Обработчик делает
больше, чем печатает сообщение: он читает атрибут `limit` прямо у перехваченного объекта, чтобы
дать полезную подсказку. В этом и преимущество собственного исключения перед простой строкой —
обработчик получает структурированные данные, с которыми может работать.

1. Исключение бросается **только** тогда, когда `$value > $limit`. Для `30` исключения нет, тело
цикла доходит до своего `say` и печатает, что значение в пределах нормы. Для `99` и `60`
срабатывает `throw`, поэтому тот `say` пропускается и дело берёт на себя `CATCH`. Тело `for`
само и есть тот блок, который охраняет `CATCH`, поэтому перехваченное исключение завершает лишь
текущую итерацию — а затем цикл просто переходит к следующему значению.

{% include nav.html %}
