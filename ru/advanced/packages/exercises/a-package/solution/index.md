---
title: 'Решение: Пакет'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
package Temperature {
    our $freezing = 0;
    our sub fahrenheit($c) { $c * 9/5 + 32 }
}

say $Temperature::freezing;
say Temperature::fahrenheit(100);
```

🦋 Исходный код можно найти в файле [a-package.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/a-package.raku).

## Вывод

```
0
212
```

## Комментарии

1. И переменная, и подпрограмма объявлены с `our`, поэтому обе становятся частью пространства имён `Temperature` и доступны извне.

1. К переменной обращаются как `$Temperature::freezing` — сигил, имя пакета, затем имя переменной, — а подпрограмма вызывается как `Temperature::fahrenheit(100)`. Преобразование `100` даёт `100 * 9/5 + 32`, что равно `212`.

1. Простой `package` предоставляет только пространство имён. Для повторно используемой библиотеки мы бы использовали `module`, а когда дело доходит до объектов — `class`, но механизм пространства имён во всех случаях одинаков.

{% include nav.html %}
