---
title: 'Решение: Модуль для крика'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи. В нём используются два файла.

## Код

Модуль `Shouter.rakumod`:

```raku
unit module Shouter;

sub shout($s) is export {
    $s.uc
}
```

Программа `shout.raku`:

```raku
use Shouter;

say shout('hi');
```

🦋 Оба исходных файла можно найти в каталоге [exercises/advanced/modules-basics/shout-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/shout-module).

## Вывод

```console
$ raku -I. shout.raku
HI
```

## Комментарии

1. Трейт `is export` делает `shout` видимой любой программе, которая использует модуль.

1. Метод `.uc` возвращает строку, переведённую в верхний регистр.

{% include nav.html %}
