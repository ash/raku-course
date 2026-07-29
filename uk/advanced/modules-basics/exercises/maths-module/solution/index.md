---
title: 'Розв''язання: Математичний модуль'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі. Він використовує два файли.

## Код

Модуль `Maths.rakumod`:

```raku
unit module Maths;

sub square($n) is export {
    $n * $n
}
```

Програма `maths.raku`:

```raku
use Maths;

say square(6);
```

🦋 Обидва файли з вихідним кодом можна знайти в каталозі [exercises/advanced/modules-basics/maths-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/maths-module).

## Вивід

```console
$ raku -I. maths.raku
36
```

## Коментарі

1. Модуль позначає `square` трейтом `is export`, — саме це й робить її доступною програмі, яка модуль використовує.

1. Опція `-I.` кладе поточний каталог на шлях пошуку модулів, тож Raku знаходить `Maths.rakumod` поруч із програмою.

{% include nav.html %}
