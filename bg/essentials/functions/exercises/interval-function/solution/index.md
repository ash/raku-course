---
title: 'Solution: Функция за интервал'
---

{% include menu.html %}

В тази функция се използва конструкция `if` с три клона. Първите два клона имат булев тест, но третата проверка не е необходима, тъй като тя е единствената останала опция, ако числото не е преминало нито един от първите два теста.

## Код

Ето решението:

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

🦋 Намерете програмата във файла [interval-function.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/interval-function.raku).

## Резултат

```console
$ raku exercises/functions/interval-function.raku
2
0
2.5
```

{% include nav.html %}