---
title: 'Розв''язання: Дві функції в одному модулі'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі. Він використовує два файли.

## Код

Модуль `Calc.rakumod`:

```raku
unit module Calc;

sub add($a, $b) is export {
    $a + $b
}

sub mul($a, $b) is export {
    $a * $b
}
```

Програма `calc.raku`:

```raku
use Calc;

say add(3, 4);
say mul(3, 4);
```

🦋 Обидва файли з вихідним кодом можна знайти в каталозі [exercises/advanced/modules-basics/two-functions](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/two-functions).

## Вивід

```console
$ raku -I. calc.raku
7
12
```

## Коментарі

1. Модуль може експортувати скільки завгодно підпрограм; кожна несе власний трейт `is export`.

1. І `add`, і `mul` стають доступними в програмі після одного-єдиного `use Calc`.

{% include nav.html %}
