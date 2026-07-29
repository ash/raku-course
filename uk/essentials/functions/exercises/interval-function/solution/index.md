---
title: 'Розв''язання: Інтервальна функція'
---

{% include menu.html %}

У цій функції використано конструкцію `if` із трьома гілками. Перші дві гілки мають булеву перевірку, а третя перевірка не потрібна, бо це єдиний варіант, що залишається, якщо число не пройшло жодної з перших двох.

## Код

Ось рішення:

```raku
sub f($x) {
    if    $x > 0  { return $x - 0.5 }
    elsif $x == 0 { return 0 }
    else          { return -$x }
}

say f(-2);
say f(0);
say f(3);
```

🦋 Знайдіть програму у файлі [interval-function.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/interval-function.raku).

## Вивід

```console
$ raku exercises/functions/interval-function.raku
2
0
2.5
```

{% include nav.html %}
