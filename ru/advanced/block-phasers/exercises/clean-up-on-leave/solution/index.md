---
title: 'Решение: Очистка при выходе'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub work {
    LEAVE say 'Cleanup';

    say 'Working';
    return;
    say 'never reached';
}

work();
```

🦋 Исходный код можно найти в файле [clean-up-on-leave.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/clean-up-on-leave.raku).

## Вывод

```
Working
Cleanup
```

## Комментарии

1. После того как напечатано `Working`, `return` немедленно завершает подпрограмму, поэтому `never reached` никогда не печатается.

1. Несмотря на досрочный выход из тела, фазер `LEAVE` всё равно срабатывает при выходе и печатает `Cleanup`. Именно эта гарантия делает `LEAVE` подходящим местом для освобождения ресурсов -- он выполняется независимо от того, как завершился блок.

{% include nav.html %}
