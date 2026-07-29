---
title: 'Розв''язання: Перехопіть вивід'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $proc = run 'echo', 'hello world raku', :out;
my $output = $proc.out.slurp(:close).trim;
say $output.words.elems;
```

🦋 Вихідний код можна знайти у файлі [capture-output.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/capture-output.raku).

## Вивід

```
3
```

## Коментарі

1. `:out` перенаправляє вивід програми в `Proc` замість екрана, а `.out.slurp(:close)` зчитує його весь назад; `.trim` прибирає завершальний перехід рядка, який додає `echo`.

1. Щойно вивід стає звичайним рядком у нашій програмі, ми поводимося з ним як із будь-якими іншими даними: `.words.elems` розбиває його за пробільними символами й рахує частини, даючи `3`. У цьому й суть перехоплення — зовнішня програма стає будівельним блоком, чий результат ми обробляємо далі.

{% include nav.html %}
