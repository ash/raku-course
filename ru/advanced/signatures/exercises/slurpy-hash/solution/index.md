---
title: 'Решение: Поглощающие именованные аргументы'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub describe($name, *%opts) {
    my $details = %opts.sort.map({ "{.key}={.value}" }).join(', ');
    "$name: $details";
}

say describe('Anna', colour => 'red', size => 5);
```

🦋 Исходный код можно найти в файле [slurpy-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/slurpy-hash.raku).

## Вывод

```
Anna: colour=red, size=5
```

## Комментарии

1. Фиксированный позиционный параметр `$name` заполняется первым, а поглощающий `*%opts` собирает все оставшиеся именованные аргументы в хеш.

1. `%opts.sort` упорядочивает пары по ключу, поэтому вывод детерминирован — `colour` идёт перед `size`. Метод `.map` превращает каждую пару в строку `key=value` с помощью `.key` и `.value`, а `.join(', ')` соединяет их вместе.

1. Итоговая строка интерполирует `$name` и собранный `$details`, давая `Anna: colour=red, size=5`.

{% include nav.html %}
