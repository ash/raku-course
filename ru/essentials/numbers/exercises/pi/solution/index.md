---
title: 'Решение: Значение числа π'
---

{% include menu.html %}

Программа для вывода значения числа π довольно простая.

## Код

```raku
say π;
```

🦋 Вы можете найти исходный код в файле [pi.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/pi.raku).

## Вывод

Запустите программу и посмотрите, что она выведет:

```console
$ raku exercises/numbers/pi.raku
3.141592653589793
```

## Комментарии

Raku имеет встроенную константу, которая называется `π`, она делает
программу тривиальной. Тем не менее, примите во внимание и другие варианты
выполнения этого задания:


```raku
π.say;
```

Или:

```raku
pi.say;
```

Или:

```raku
say pi;
```

{% assign human=1 %}
{% include nav.html %}
