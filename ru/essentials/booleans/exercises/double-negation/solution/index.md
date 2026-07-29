---
title: 'Решение: Двойная инверсия'
---

{% include menu.html %}

Давайте дополним программу, чтобы решить вторую часть задачи и переиспользуем ту
же переменную.

## Код

```raku
my $value = False;
say !!$value;

$value = True;
say !!$value;
```

🦋 Вы можете найти исходный код в файле [double-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/double-negation.raku).

## Комментарии

Перед тем, как запустить программу, давайте подумаем, что она должна
вывести. Перед переменной здесь две операции инверсии. В первом случае
переменная переворачивается из `False` в `True`, а потом сразу обратно из `True`
в `False`. Во втором случае алгоритм тот же: после двух инверсий мы получаем
начальное булево значение.

## Вывод

Программа выводит следующее, что подтверждает рассуждения выше:

```console
$ raku exercises/booleans/double-negation.raku
False
True
```

{% assign human=1 %}
{% include nav.html %}
