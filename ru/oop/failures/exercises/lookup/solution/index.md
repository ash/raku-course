---
title: 'Решение: Поиск или «не найдено»'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub lookup($key) {
    fail 'no such key' if $key ne 'a';
    return 100;
}

my $r = lookup('z');
if $r.defined {
    say $r;
}
else {
    say 'not found';
    say "reason: {$r.exception.message}";
}
```

🦋 Исходный код можно найти в файле [lookup.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/lookup.raku).

## Вывод

```
not found
reason: no such key
```

## Комментарии

1. `lookup('z')` вызывает `fail`, поэтому возвращает неопределённый `Failure`.

1. Поскольку результат не определён, программа печатает `not found`, а не пытается
воспользоваться сбойным значением.

1. `Failure` всё же несёт в себе исключение, описывающее, что пошло не так. `$r.exception`
извлекает его — а заодно помечает сбой как обработанный, так что позже он уже не взорвётся, —
а `.message` читает текст, переданный в `fail`: `no such key`.

{% include nav.html %}
