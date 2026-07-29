---
title: 'Розв''язання: Перекрийте динамічну'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

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

🦋 Вихідний код можна знайти у файлі [override-dynamic.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/override-dynamic.raku).

## Вивід

```
INFO: working
DEBUG: working
```

## Коментарі

1. `task` викликає `log-it`, але ніколи не згадує `$*prefix`. Значення все одно доходить до `log-it`, бо динамічний пошук іде назовні по стеку викликів — повз `task` — до того, хто в цю мить перебуває у стеку.

1. Два блоки встановлюють різні значення, тож *той самий* виклик `task()` щоразу дає інший префікс. Саме це робить динамічні змінні корисними: контекст перетікає в глибоко вкладений код, не протягуючись аргументом крізь кожну проміжну підпрограму.

{% include nav.html %}
