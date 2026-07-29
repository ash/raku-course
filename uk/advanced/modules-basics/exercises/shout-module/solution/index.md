---
title: 'Розв''язання: Модуль-крикун'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі. Він використовує два файли.

## Код

Модуль `Shouter.rakumod`:

```raku
unit module Shouter;

sub shout($s) is export {
    $s.uc
}
```

Програма `shout.raku`:

```raku
use Shouter;

say shout('hi');
```

🦋 Обидва файли з вихідним кодом можна знайти в каталозі [exercises/advanced/modules-basics/shout-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/shout-module).

## Вивід

```console
$ raku -I. shout.raku
HI
```

## Коментарі

1. Трейт `is export` робить `shout` видимою будь-якій програмі, яка використовує модуль.

1. Метод `.uc` повертає версію рядка у верхньому регістрі.

{% include nav.html %}
