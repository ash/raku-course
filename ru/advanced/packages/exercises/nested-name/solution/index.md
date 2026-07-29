---
title: 'Решение: Вложенное имя'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
module Outer {
    module Inner {
        our $base = 10;
        our sub doubled { $base * 2 }
    }
}

say $Outer::Inner::base;
say Outer::Inner::doubled();
```

🦋 Исходный код можно найти в файле [nested-name.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/nested-name.raku).

## Вывод

```
10
20
```

## Комментарии

1. Вложение одного пространства имён в другое строит более длинный путь `::`. И переменная, и подпрограмма находятся на двух уровнях вложенности, в `Outer::Inner`.

1. Полное имя `$Outer::Inner::base` обращается к переменной, а `Outer::Inner::doubled()` обращается к подпрограмме через те же два уровня. Имя подпрограммы не несёт сигила, поэтому, в отличие от переменной, перед ним нет `$`.

1. Оба члена объявлены с `our`, что делает их видимыми за пределами их модуля. Объявление с `my` сохранило бы их приватными для `Inner`.

{% include nav.html %}
