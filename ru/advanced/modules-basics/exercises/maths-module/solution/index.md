---
title: 'Решение: Математический модуль'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи. В нём используются два файла.

## Код

Модуль `Maths.rakumod`:

```raku
unit module Maths;

sub square($n) is export {
    $n * $n
}
```

Программа `maths.raku`:

```raku
use Maths;

say square(6);
```

🦋 Оба исходных файла можно найти в каталоге [exercises/advanced/modules-basics/maths-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/maths-module).

## Вывод

```console
$ raku -I. maths.raku
36
```

## Комментарии

1. Модуль помечает `square` трейтом `is export`, и именно это делает подпрограмму доступной
программе, которая использует модуль.

1. Опция `-I.` добавляет текущий каталог в путь поиска модулей, поэтому Raku находит
`Maths.rakumod` рядом с программой.

{% include nav.html %}
