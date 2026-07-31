---
title: 'Решение: Переопределение динамической переменной'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub log-it($msg) {
    say "$*prefix: $msg";
}

sub task {
    log-it('working');
}

{
    my $*prefix = 'INFO';
    task();
}

{
    my $*prefix = 'DEBUG';
    task();
}
```

🦋 Исходный код можно найти в файле [override-dynamic.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/override-dynamic.raku).

## Вывод

```
INFO: working
DEBUG: working
```

## Комментарии

1. `task` вызывает `log-it`, но никогда не упоминает `$*prefix`. Тем не менее значение достигает `log-it`, потому что динамический поиск следует по стеку вызовов наружу — через `task` — к тому, кто находится на стеке в данный момент.

1. Два блока задают разные значения, поэтому один и тот же вызов `task()` каждый раз выдаёт разный префикс. Именно это делает динамические переменные полезными: контекст проникает в глубоко вложенный код без необходимости передавать его через каждую промежуточную подпрограмму в качестве аргумента.

{% include nav.html %}
