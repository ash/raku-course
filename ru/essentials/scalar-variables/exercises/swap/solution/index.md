---
title: 'Решение: Замена значений'
---

{% include menu.html %}

В этой программы мы используем элементы синтаксиса Raku из прошлой главы о
[скалярных переменных](/ru/essentials/scalar-variables).

## Код

```raku
my ($a, $b) = 10, 20;
($a, $b) = $b, $a;
say "$a, $b";
```

🦋 Вы можете найти исходный код в файле [swap.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/scalar-variables/swap.raku).

## Вывод

Запустите программу, чтобы убедиться, что она печатает значения в правильном
порядке.

```console
$ raku exercises/scalar-variables/swap.raku
20, 10
```

## Комментарии

Все шаги этой программы (создание переменных и присвоение им значений, их
замена, вывод) используют обе переменные в одной инструкции. Самое интересное,
это когда переменные обмениваются значениями:

```raku
($a, $b) = $b, $a;
```

Скобки обязательны с левой стороны, но вы также можете их добавить с правой:

```raku
($a, $b) = ($b, $a);
```

Что случится, если мы уберем скобки?

```raku
$a, $b = $b, $a;
```

В этом случае вы получите предупреждение, что `$a` с правой стороны не используется:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of $a in sink context (lines 2, 2)
10, 20
```

На самом деле строка выше эквивалентна бесполезному присваиванию `$b = $b`. Это
легко увидеть, если вы измените значение с правой стороны, например:

```raku
$a, $b = 2 * $b, 3 * $a;
```

Программа напишет еще больше предупреждений, но вы также увидите, что только
`$b` изменило свое значение:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of "*" in expression "3 * $a" in sink context (line 2)
Useless use of $a in sink context (line 2)
10, 40
```

{% assign human=1 %}
{% include nav.html %}
