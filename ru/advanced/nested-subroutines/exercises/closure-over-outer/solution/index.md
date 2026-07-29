---
title: 'Решение: Замыкание на внешнюю переменную'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub greet($name) {
    sub message {
        "Hello, $name!";
    }

    say message;
}

greet('Anna');
```

🦋 Исходный код можно найти в файле [closure-over-outer.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/closure-over-outer.raku).

## Вывод

```
Hello, Anna!
```

## Комментарии

1. `message` не принимает аргументов, но может использовать `$name`. Вложенная подпрограмма замыкается на лексических переменных содержащей её подпрограммы, поэтому внешняя `$name` находится в области видимости.

1. Когда выполняется `greet('Anna')`, значение `$name` равно `'Anna'`, поэтому `message` возвращает `Hello, Anna!`. Именно это разделение объемлющей области видимости делает вложенные помощники чем-то большим, чем просто скрытые функции.

{% include nav.html %}
