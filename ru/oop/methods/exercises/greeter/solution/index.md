---
title: 'Решение: Перевёрнутое слово'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Word {
    has $.text;

    method reversed {
        $.text.flip;
    }
}

say Word.new(text => 'Raku').reversed;
```

🦋 Исходный код можно найти в файле [greeter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/greeter.raku).

## Вывод

```
ukaR
```

## Комментарии

1. Метод `reversed` обращается к собственному `text` объекта через аксессор `$.text` и вызывает
у него встроенный `flip`, который возвращает перевёрнутую строку.

1. Метод вызывается прямо у только что созданного объекта `Word`. Ничего не сохраняется обратно —
`reversed` просто вычисляет и возвращает новое значение на основе атрибута.

1. Обратите внимание, что внутри класса переменную можно читать напрямую, не прибегая
к аксессору:

```raku
    method reversed {
        $!text.flip;
    }
```

{% include nav.html %}
