---
title: 'Решение: Тройная инверсия'
---

{% include menu.html %}

Программа в задании не будет компилироваться и требует небольшого
исправления. Ниже правильный работающий вариант программы (добавлен пробел,
чтобы разделить `!` и `!!`).

## Код

```raku
my $value = False;
say ! !!$value;
```

🦋 Вы можете найти исходный код в файле [triple-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/triple-negation.raku).

## Вывод

Программа выводит противоположное булево значение, как вы наверное и ожидали:

```console
$ raku triple-negation.raku
True
```

## Комментарии

Было немного неожиданно, что программа с тремя восклицательными знаками
отказывалась компилироваться:

```console
$ raku triple-negation.raku
===SORRY!=== Error while compiling /Users/ash/raku-course/exercises/booleans/triple-negation.raku
Two terms in a row
at /Users/ash/raku-course/exercises/booleans/triple-negation.raku:2
------> say !!!⏏$value;
    expecting any of:
        infix
        infix stopper
        postfix
        statement end
        statement modifier
        statement modifier loop
```

Дополнительный пробел решил проблему. Но не попадитесь в другую
ловушку. Взгляните на следующую программу:

```raku
my $value = False;
say !!! $value;
```

Эта программа компилируется, но прекращается со следующим сообщением:

```console
$ raku triple-negation.raku
False
    in block <unit> at exercises/booleans/triple-negation.raku line 2
```

Так происходит, потому что `!!!` является специальным оператором, чтобы пометить
часть кода как заглушку. Если программа достигнет этого момента, она завершится
и выведет сообщение (в нашем случае это текущее значение переменной
`$value`). [В документации 📖](https://docs.raku.org/routine/!!!) вы найдете
больше.

{% assign human=1 %}
{% include nav.html %}
